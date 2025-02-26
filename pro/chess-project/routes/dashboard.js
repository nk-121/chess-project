const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const user = req.session.user || { username: 'Guest' };
    res.render('layout', { title: 'Dashboard', content: 'dashboard/dashboard', user });
});

module.exports = router;
