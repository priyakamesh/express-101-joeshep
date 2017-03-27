const { Router }= require('express');
const router = Router();

router.use(require('./animals'));
router.use(require('./games'));
router.use(require('./food'));
module.exports = router;
