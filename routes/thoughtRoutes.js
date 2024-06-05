const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController');

router.get('/', thoughtController.getAllThoughts);
router.post('/', thoughtController.createThought);
router.put('/:id', thoughtController.updateThought);
router.delete('/:id', thoughtController.deleteThought);
router.post('/:thoughtId/reactions', thoughtController.addReaction);
router.delete('/:thoughtId/reactions/:reactionId', thoughtController.deleteReaction);

module.exports = router;