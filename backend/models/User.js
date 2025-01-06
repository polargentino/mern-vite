const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  comments: { type: String }, // Nuevo campo para comentarios
  createdAt: { type: Date, default: Date.now }, // Fecha y hora de creación
  updatedAt: { type: Date, default: Date.now }, // Fecha y hora de última actualización
});

UserSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('User', UserSchema);
