exports.getHome = (req, res) => {
    let userRole =  ["player","organizer","coordinator"]; // Default to 'Guest'
    res.render('layout/home/home', { body: '../../h/home' ,userRole:userRole });
};

