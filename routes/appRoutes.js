var express = require('express');
var router = express.Router();

router.post('/create', (req, res, next) =>{
    res.status(200).json({ msg: 'Post request is woking'});
});
router.get('/read',(req, res, next) => {
    res.status(200).json({ msg: 'Get request is woking'});
});
router.put('/update',(req, res, next) => {
    res.status(200).json({ msg: 'Put request is woking'});
});
router.get('/delete/:id',(req, res, next) => {
    res.status(200).json({ msg: 'delete request is woking'});
});

module.exports = router;