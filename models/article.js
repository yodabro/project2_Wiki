var mongoose = require('mongoose'),
// requiring Mongoose and giving the var for faster use
    Schema = mongoose.Schema;

var sectionSchema = Schema({
  // creating section schema and her prop
  title: String,
  content: String
});

var articleSchema = Schema({     /*main article schema*/
  author: {type:String, required : true},
  title: {type:String, required : true},
  sections: [sectionSchema],
  category: {type:String, required : true},
  date: {type: Date, default: Date.now}
});

var Section = mongoose.model('Section', sectionSchema);
var Article = mongoose.model("Article", articleSchema);

module.exports = {Article:Article,     /*exporting modules*/
                  Section:Section};
