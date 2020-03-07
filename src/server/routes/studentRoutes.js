const express = require('express');
const router = express.Router();
const studentControl = require('../controllers/studentController');

router.post('/', studentControl.newStudent);
router.get('/', studentControl.getStudents);
router.put('/:id', studentControl.upStudents);
router.get('/:id', studentControl.getById);
router.delete('/:id', studentControl.delStudent);
router.get('/group/:group', studentControl.getByGroup);

module.exports = router;