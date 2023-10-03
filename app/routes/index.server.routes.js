var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) { res.render('index', { title: 'Home' }); });
router.get('/about', function(req, res, next) { res.render('about', { title: 'About' });
});
router.get('/projects', function(req, res, next) { res.render('projects', { title: 'Projects' });});

// router.get('/products', (req, res) => {
//     // You can add logic here to fetch and render a list of products
//     // For now, let's just render a simple page
//     res.render('products'); // Assuming you have a 'products.ejs' template
//   });
  
router.get('/contact', function(req, res, next) { res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) { res.render('services', { title: 'Services' });
});
module.exports = router;
