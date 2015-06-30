var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sectionSchema = Schema({
  title: String,
  content: String
});

var articleSchema = Schema({
  author: {type:String, required : true},
  title: {type:String, required : true},
  sections: [sectionSchema],
  category: {type:String, required : true},
  date: {type: Date, default: Date.now}
});

var Section = mongoose.model('Section', sectionSchema);
var Article = mongoose.model("Article", articleSchema);

module.exports = {Article:Article,
                  Section:Section};
