module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'colleges  select your college',
        pageHeader: {
            title: 'colleges',
            strapline: 'Find your dream college'
        },
        sidebar: "Looking for good college to join?  visit us.",
        locations: [{
            name: 'Anurag university',
            address: 'near hyderabad',
            rating: 5,
            facilities: [],
            distance: '12km'
        }, {
            name: 'NNRG',
            address: ' Hyderabad',
            rating: 3,
            facilities: ['hstels','libraries'],
            distance: '15km'
        }, {
            name: 'sreenidhi ',
            address: 'hhyderabad',
            rating: 2,
            facilities: ['Homely food', 'Premium wifi'],
            distance: '300km'
        }]
    });
};
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', { title: 'LocationInfo' });
};
module.exports.locationInfo1 = function (req, res) {
    res.render('locations-info1', { title: 'LocationInfo1' });
};
module.exports.locationInfo2 = function (req, res) {
    res.render('locations-info2', { title: 'LocationInfo2' });
};
module.exports.addReview = function (req, res) {
    res.render('locations-review-form', { title: 'ADD REVIEW' });
};