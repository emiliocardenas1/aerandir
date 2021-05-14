import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"

import indexRouter from "./src/routes/index.js"
import renderaRouter from "./src/routes/rendera.js"
import renderbRouter from "./src/routes/renderb.js"
import ashtmlRouter from "./src/routes/ashtml.js"

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(".", "public")))

app.use("/", indexRouter)
app.use("/rendera", renderaRouter)
app.use("/renderb", renderbRouter)
app.use("/ashtml", ashtmlRouter)

const listener = app.listen(8080, function () {
  console.log("Listening carefully on port  asdf" + listener.address().port)
})
