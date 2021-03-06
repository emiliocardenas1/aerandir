import _ from "lodash"
import Express from "express"

const Router = Express.Router()

const Templates = {
  welcome: _.template(`
  welcome to tookstock <%- firstName %>
`),
}

Router.get("/", async function (req, res, next) {
  const foo = String(7)
  const bob = { hi: "there" }
  console.log(`hi foo = ${JSON.stringify(foo)}-${JSON.stringify(bob)}`)
  const content = Templates.welcome({
    firstName: "Emilio",
  })
  // content("bob")
  console.log(content)
  //
  res.send({
    route: "b",
    result: "hi there!",
    content,
  })
})

export default Router
