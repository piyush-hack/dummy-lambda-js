const express = require('express');
const router = express.Router();

router.post('/site', async (req, res) => {
    console.log("body ", req.body);
    res.send(200);
});


module.exports = router