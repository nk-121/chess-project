
exports.getplayer = (req, res) => {
    res.render('layout/dashboard/dashboard', { 
        body: "../../dashboard/playerDashboard",
        navbar: "../../partials/dashboard/playerPartials/dashboardNavbar",
        footer: "../../partials/dashboard/playerPartials/dashboardFooter"
    });
};
//"../dashboard/playerDashboard"

exports.getorganizer = (req, res) => {
    res.render('layout/dashboard/dashboard', { 
        body: "../../dashboard/organizerDashboard",
        navbar: "../../partials/dashboard/organizerPartials/dashboardNavbar",
        footer: "../../partials/dashboard/organizerPartials/dashboardFooter"
    });
};

exports.getcoordinator = (req, res) => {
    res.render('layout/dashboard/dashboard', { 
        body: "../../dashboard/coordinatorDashboard",
        navbar: "../../partials/dashboard/coordinatorPartials/dashboardNavbar",
        footer: "../../partials/dashboard/coordinatorPartials/dashboardFooter"
    });
};