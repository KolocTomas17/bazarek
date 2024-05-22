const express = require('express');
const router = express.Router();

const itemController = require("../controllers/items");

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/', itemController.postItem);
router.put('/:id', itemController.putItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
