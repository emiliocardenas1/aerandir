import _ from "lodash"
import Express from "express"
//
import * as Renderer from "../templating/Renderer.js"

const Router = Express.Router()

Router.get("/", async function (req, res, next) {
  res.send(`
  <H1>Hi!</H1>
  <code>there</code>
  `)
})

export default Router
