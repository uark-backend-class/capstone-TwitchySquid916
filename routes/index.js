const router = require("express").Router();
const associate = require("../controllers/associate.controller");
const auth = require("../controllers/auth.contoller");

router.get("/", (req,res)=> res.redirect("/login"))
router.post("/login", auth.login);
router.get("/login", auth.loginPage);
router.get("/register", auth.registrationPage);
router.post("/register", auth.register, auth.login);
router.get("/associateTasks" , auth.associateTasks);
router.get("/termsOfService", auth.termsOfService);
//router.get("/getTask", auth.getTask);
router.get("/list-associates-no-edit", auth.listAssociateNoEdit);
router.get("/associateLogout", auth.associateLogout);

router.use(auth.isAuthenticated);
router.get("/listAssociates",  associate.listAssociatesPage);
router.get("/addAssociate",  associate.addUpdateAssociatePage);
router.get("/update/:id", associate.addUpdateAssociatePage);
router.get("/delete/:id", associate.delete);
//router.get("/deleteAcct/:id", associate.deleteLeadAcct);
router.post("/updateAssociate", associate.updateAssociate);
router.get("/secrets", (req, res) => res.redirect("/listAssociates"));
router.get("/logout", auth.logout);

module.exports = router;