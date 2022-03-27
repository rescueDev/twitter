const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/api/user/:userID", userController.fetchUser);
router.get("/api/users", userController.fetchUsers);
router.post("/api/user/:userID", userController.editUser);
router.delete("/api/user/:userID", userController.deleteUser);

//auth
router.post("/api/signin", userController.signIn);
router.post("/api/signout", userController.signOut);
router.post("/api/signup", userController.signUp);
// router.post("/logout", userController.postLogout);

//send email for resetting password
// router.get("/reset-password", userController.getResetPass);
// router.post("/reset-password", userController.postResetPass);

//pages for resetting password after email link
// router.get("/new-password/:token", userController.getNewPassword);
// router.post("/new-password", userController.postNewPassword);

module.exports = router;
