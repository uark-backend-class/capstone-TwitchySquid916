const router = require('express').Router();
const taskMate = require("../controllers/taskMate.controller");
//controller for authorization later

router.get("/", taskMate.loginPage);
router.get("/termsOfService", taskMate.termsOfService);
router.get("/login", taskMate.login);
router.get("/convoList", taskMate.convoList);
router.get("/signUp", taskMate.signUp);
router.get("/usersList", taskMate.usersList);
router.get("/settings", taskMate.settings);
router.get("/returnToConvoList", taskMate.returnToConvoList);
//router.get("/signUpUser", taskMate.signUpUser)
// /convo list route, get/post/delete?
// /:id convo route, get/post?
// /taskMe route, get/post?
// /convoStarter route, post/update?
// /updateMe route, post/update/get?

module.exports = router;