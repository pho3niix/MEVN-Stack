const express = require('express');
const router = express.Router();
const controlGroup = require('../controllers/groupControllers');

router.get('/', controlGroup.getGroup);
router.post('/', controlGroup.newGroup);
router.put('/:id', controlGroup.upGroup);
router.delete('/:id', controlGroup.delGroup);

module.exports = router;