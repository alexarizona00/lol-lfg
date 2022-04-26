const router = require('express').Router();
const appControler = require('../controllers/appControler');

//linking home page to controller 
router.get('/', appControler);

module.exports = router;