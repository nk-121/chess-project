
exports.getplayer = (req, res) => {
    res.render('layout/dashboard/dashboard', { 
        body: "../../dashboard/player/playerDashboard",
       req:req
    });
};
//"../dashboard/playerDashboard"

exports.getorganizer = (req, res) => {
    res.render('layout/dashboard/dashboard', { 
        body: "../../dashboard/organizer/organizerDashboard",
        req:req
    });
};

exports.getcoordinator = (req, res) => {
    res.render('layout/dashboard/dashboard', { 
        body: "../../dashboard/coordinator/coordinatorDashboard",
        req:req
    });
};

exports.getsubscription = (req, res) => {

    res.render('dashboard/helpingpages/subscription', { 
        req: req
     
    });
}

exports.gethome = (req, res) => {

    res.render('dashboard/helpingpages/home', { 
        req: req

    });
}

exports.getecommerce_store = (req, res) => {

    res.render('dashboard/helpingpages/ecommerce-store', { 
        req: req
     
    });
}

exports.gettournaments = (req, res) => {

    res.render('dashboard/helpingpages/tournaments', {
        req: req
     
    });



}

exports.getgrowthtracking = (req, res) => {

    res.render('dashboard/helpingpages/growth_tracking', {
        req: req
     
    });


}