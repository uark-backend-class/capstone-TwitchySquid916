const Associate = require("../models/Associate");
const Lead = require("../models/Lead");

exports.listAssociatesPage = async (req, res) => {
  const associates = await Associate.find({ user: req.user._id }).lean();
  res.render("list-associates", { title: "Todays Task List", associates, name: req.user && req.user.name }); //req.user.email alone can crash app if not logged in or a different browser is trying to access that loggin bc it will be undefined.email
};

exports.addUpdateAssociatePage = async (req, res) => {
  // Check to see if there is an id on the URL. If there is 
  // then it is an update to an existing associate. If no id,
  // then it is an add.
  if (req.params.id) {
    const associate = await Associate.findOne( { _id: req.params.id, lead: req.user._id }).lean();

    if(associate){
      res.render("add-update-associate", {title: "Update Task", associate});
    }
    else{
      res.status(404).send();
    }
  }
  else {
    res.render("add-update-associate", { title: "Add Associate Task"} );
  }
};

exports.updateAssociate = async (req, res) => { 
  if (req.body.id) {
    await Associate.findByIdAndUpdate(req.body.id, req.body);
  }
  else {
    const associate = new Associate({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      team: req.body.team,
      task: req.body.task,
      user: req.user._id,
    });

    await associate.save();
  }

  res.redirect("/listAssociates");
}

exports.delete = async (req, res) => {
  await Associate.findByIdAndDelete(req.params.id);
  res.redirect("/listAssociates");
}

exports.deleteLeadAcct = async (req,res) => {
  let lead = await Lead.findById(req.user._id);
  await Associate.deleteMany({ user: req.user._id });
  await Lead.findByIdAndDelete(req.user._id);
   
  res.redirect("/login");
} 
