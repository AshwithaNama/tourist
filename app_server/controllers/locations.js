module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'TOURIST PLACES - Find a place to visit',
        pageHeader: {
            title: 'tourist places explorer',
            strapline: 'Find places to visit!'
        },
        sidebar: "Looking for good place to visit? tourist places helps you find places to visit.",
        locations: [{
            name: 'TAJ MAHAL',
            address: 'near river yamuna, Agra, uttarpradesh',
            rating: 4,
            facilities: ['hotels', 'Premium wifi','bus facility'],
            distance: '1200km'
        }, {
            name: 'charminar',
            address: ' Hyderabad',
            rating: 3,
            facilities: ['restaurants', 'streetshopping','books'],
            distance: '15km'
        }, {
            name: 'Gateway of India',
            address: 'Apollo Bandar, Colaba, Mumbai, Maharashtra 400001',
            rating: 2,
            facilities: ['Homely food', 'Premium wifi','Photographers'],
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