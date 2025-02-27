exports.getHome = (req, res) => {
    res.render('layout/home/home', { body: '../../h/home' });
};