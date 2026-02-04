const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    filename: {
      type: String,
      required: true,
    },

    originalName: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    permissions: {
      viewers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: [],
      },
      editors: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: [],
      },
    },

    versions: {
      type: [
        {
          filename: String,
          uploadedAt: Date,
        },
      ],
      default: [],   
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Document', documentSchema);
