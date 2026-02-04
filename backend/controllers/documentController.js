const Document = require('../models/Document');
exports.uploadDocument = async (req, res) => {
  try {
    const { title, tags } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const document = await Document.create({
      title,
      filename: req.file.filename,
      originalName: req.file.originalname,
      tags: tags ? tags.split(',') : [],
      uploadedBy: req.user._id,
      permissions: {
        viewers: [],
        editors: [],
      },
      versions: [],
    });

    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({
      uploadedBy: req.user._id,
    }).sort({ createdAt: -1 });

    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchDocuments = async (req, res) => {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const documents = await Document.find({
      uploadedBy: req.user._id,
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { tags: { $in: [q] } },
      ],
    }).sort({ createdAt: -1 });

    res.json(documents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updatePermissions = async (req, res) => {
  try {
    const { documentid, userId, role } = req.body;

    const document = await Document.findById(documentid);

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Only owner can update permissions
    if (document.uploadedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    if (role === 'viewer') {
      document.permissions.viewers.addToSet(userId);
    } else if (role === 'editor') {
      document.permissions.editors.addToSet(userId);
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    await document.save();
    res.json({ message: 'Permissions updated successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Upload a new version of an existing document
 */
exports.uploadNewVersion = async (req, res) => {
  try {
    const { documentid } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const document = await Document.findById(documentid);

    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }

    const isEditor =
      document.uploadedBy.toString() === req.user._id.toString() ||
      document.permissions.editors.includes(req.user._id);

    if (!isEditor) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    // Save old version
    document.versions.push({
      filename: document.filename,
      uploadedAt: new Date(),
    });

    // Replace current file
    document.filename = req.file.filename;
    document.originalName = req.file.originalname;

    await document.save();

    res.json({ message: 'New version uploaded successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
