const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username: username
    },{
        purchasedCourses:{
            "$push":courseId
        }
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router