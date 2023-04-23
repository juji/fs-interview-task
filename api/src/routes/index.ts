import Router from "express-promise-router"

const router = Router();

router.all("/", (req, res) => res.json({ version: "0.0.1" }));

router.get("/test-login", (req, res) => {

    res.json({
        loggedIn: req.oidc.isAuthenticated()
    })

});

export default router
