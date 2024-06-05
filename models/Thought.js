const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionBody: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
}, {_id: false });

const thoughtSchema = new mongoose.Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [reactionSchema],
}, { timestamps: true });

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;