import mongoose, { Schema } from 'mongoose';
// mongoose.Promise = global.Promise;

const GroupSchema = new Schema({
  name: { 
    type: String, 
    required: true
  },
  persons: { type: Array, default: [] },
  order: { type: Array, default: [] },
  queue: { type: Array, default: [] },
  history: [{
    person: String,
    date: { type: Date, default: Date.now }
  }] 
})

export default  mongoose.model('Group', GroupSchema);