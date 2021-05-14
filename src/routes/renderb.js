import _ from "lodash"
import Express from "express"
//
import * as Renderer from "../templating/Renderer.js"

const Router = Express.Router()

Router.get("/", async function (req, res, next) {
  const dummyParams = {
    template: "welcome",
    data: {
      firstName: "Bilbo",
    },
  }
  const { template, data } = dummyParams
  const content = Renderer.render(template, data)
  res.send({
    route: "b",
    content,
  })
})

export default Router
