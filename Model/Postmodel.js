const mongoose=require("mongoose");
const postschema=mongoose.Schema({
   "Companyname":String,
   "City":String,
   "Location":String,
   "Role":String,
   "Level":String,
   "Position":String,
   "Language":String,
   "Contract":String,
   "postedAt":Date,
})
const postmodel=mongoose.model("jobposting",postschema);
module.exports={
  postmodel
}