const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().populate('thoughts').populate('friends');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = new  User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true, 
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

    exports.deleteUser = async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' })
            }
            res.json({ message: "User succesfully deleted" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    exports.addFriend = async (req, res) => {
        try {
          const user = await User.findByIdAndUpdate(
            req.params.userId,
            { $push: { friends: req.params.friendId } },
            { new: true }
          ).populate('friends');
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.json(user);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      };

exports.removeFriend = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      ).populate('friends');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
