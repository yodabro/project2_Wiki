var express = require('express'),
    router = express.Router(),
    Article = require('../models/article.js').Article;
    Section = require('../models/article.js').Section;

// remember, every route has /posts before it in here...

// INDEX
router.get('/', function (req, res) {
  Article.find({}, function (err, articlesArray) {
    if (err) {
      console.log(err);
    } else {
      res.render('articles/index.ejs', { articles: articlesArray });
    };
  });
});

// NEW
router.get('/new', function (req, res) {
  res.render('articles/new');
});

// CREATE
router.post('/', function (req, res) {
  var newArticle = new Article(req.body.article);

  newArticle.save(function (err, article) {
    if (err) {
      console.log(err);
    } else {
      res.redirect(301, '/articles');
    };
  });
});

// SHOW
router.get('/:id', function (req, res) {
  var id = req.params.id
  Article.findById(id, function (err, article) {
    res.render('articles/show', { article : article })
  });
});

// DELETE
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Article.remove({_id:id}, function (err, result){
    if (err){
      console.log(err);
    } else {
      res.redirect(301, '/articles');
    }
  })
});

// EDIT
router.get('/:id/edit', function (req, res) {
  // console.log("starting lookup...");
 Article.findById(req.params.id, function (err,article){
  //  console.log("lookup complete...");
   res.render('articles/edit', {article:article});
 });
});

// UPDATE
router.patch('/:id', function (req, res) {
  var id = req.params.id;

  console.log(req.body.article);

  Article.update({_id: id}, req.body.article, function (err, result){
    console.log(err);
    console.log(result);
    if (err){
    console.log(err);
  } else {
    res.redirect(301, '/articles/' + req.params.id)
  };
});
});

module.exports = router;
