var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sectionSchema = Schema({
  title: String,
  content: String
});

var articleSchema = Schema({
  author: String,
  title: String,
  content: [sectionSchema]
});

var Section = mongoose.model('Section', sectionSchema);
var Article = mongoose.model("Article", articleSchema);

module.exports = {Article:Article,
                  Section:Section};
