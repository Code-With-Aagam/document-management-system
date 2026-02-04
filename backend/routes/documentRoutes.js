const express = require('express');
const upload = require('../config/multer');
const {
  uploadDocument,
  getDocuments,
  searchDocuments,
  updatePermissions,
  uploadNewVersion,
} = require('../controllers/documentController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Upload document
router.post(
  '/upload',
  protect,
  upload.single('file'),
  uploadDocument
);

// Get all documents
router.get('/', protect, getDocuments);

// Search documents
router.get('/search', protect, searchDocuments);

// Update permissions
router.put('/permissions', protect, updatePermissions);

// Upload new version
router.post(
  '/version',
  protect,
  upload.single('file'),
  uploadNewVersion
);

module.exports = router;
