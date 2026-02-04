const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('DMS running');
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
const { protect } = require('./middleware/authMiddleware');

app.get('/api/protected', protect, (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user,
  });
});

const documentRoutes = require('./routes/documentRoutes');

app.use('/api/documents', documentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
