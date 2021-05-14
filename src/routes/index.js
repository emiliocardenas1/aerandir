import Express from "express"

const Router = Express.Router()

/* GET home page. */
Router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" })
})

export default Router
