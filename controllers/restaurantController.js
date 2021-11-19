module.exports.viewAll = function(req, res, next) {
    const restaurant =[ {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://i3.ypcdn.com/blob/e28d7b49f0249334684a0e98ad6b6d42eb211768_400x260_crop.jpg',
        rating: 2,
        category: 'Italian',
        description:'jbjesbf jkcbse hj jbj esbfjk cbsehj jbj esbfjk cbsehj jbje sbfjk cbsehj jbjes bfjk cbsehj'
    },
    {   id: 2,
        name: 'Not Pizza Hut',
        image: 'https://i3.ypcdn.com/blob/e28d7b49f0249334684a0e98ad6b6d42eb211768_400x260_crop.jpg',
        rating: 4,
        category: 'Italian',
        description: 'jbjesbf jkcbse hj jbj esbfjk cbsehj jbj esbfjk cbsehj jbje sbfjk cbsehj jbjes bfjk cbsehj'

    }];
    res.render('index', {restaurants});
}