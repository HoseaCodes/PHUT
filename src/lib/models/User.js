import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  role: { 
    type: String, 
    required: true,
    enum: ['admin', 'trainee', 'client'],
    default: 'trainee'
  },
  projects: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project' 
  }],
}, { 
  timestamps: true 
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)

