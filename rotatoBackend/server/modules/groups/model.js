import mongoose, { Schema } from 'mongoose';
// mongoose.Promise = global.Promise;

const GroupSchema = new Schema({
  name: { 
    type: String, 
    required: true
  },
  rotatees: { type: Array, default: [] },
  queue: { type: Number, default: 0 },
  history: [{
    person: String,
    date: { type: Date, default: Date.now }
  }] 
})

export default  mongoose.model('Group', GroupSchema);