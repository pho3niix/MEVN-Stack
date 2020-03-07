const express = require('express');
const router = express.Router();
const teacherControl = require('../controllers/teacherControllers');

router.post('/', teacherControl.newTeacher);
router.get('/', teacherControl.getTeachers);
router.put('/:id', teacherControl.upTeacher);
router.get('/:id', teacherControl.findById);
router.delete('/:id', teacherControl.delTeacher);
router.put('/:group/:id', teacherControl.setGroup);
router.get('/group/:group', teacherControl.getGroups);

module.exports = router;