const Thought = require('../models/Thought');
const User = require('../models/user');

exports.getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find().populate('reactions');
        res.json(thoughts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createThought = async (req, res) => {
    try {
        const thought = new Thought(req.body);
        await thought.save();
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: thought._id } });
        res.status(201).json(thought);    
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateThought = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidators: true, 
      });
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  exports.deleteThought = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndDelete(req.params.id);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      await User.findByIdAndUpdate(thought.userId, { $pull: { thoughts: thought._id } });
      res.json({ message: 'Thought deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.addReaction = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  exports.deleteReaction = async (req, res) => {
    try {
      const thought = await Thought.findByIdAndUpdate(
        req.params.thoughtId,
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { new: true, runValidators: true }
      );
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      res.json(thought);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };