var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/salons', function(req, res, next) {
  const data = [{name: 'Salon'}];
  res.send(200, data);
});
router.post('/salons', function (req, res, next) {
    const data = req.body;
    res.send(200, data)
})

module.exports = router;
