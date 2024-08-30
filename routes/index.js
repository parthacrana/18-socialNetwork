const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.use((req, res) => {
    res.status(404).send("404 Error");
  });


module.exports = router;