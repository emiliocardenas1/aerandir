import _ from "lodash"
import FS from "fs"
import Path from "path"

const TEMPLATE_PATH = "../../templates/"

const DUMMY_TEMPLATE = `
welcome to tookstock <%- firstName %>
`

const TemplateFiles = {
  welcome: {
    name: "welcome",
    kind: "md",
  },
}

// MAek a hash with the same keys but templating functions
export const Templates = _.mapValues(TemplateFiles, templateFunc)

function pathForTemplate({ name, kind }) {
  return Path.join(TEMPLATE_PATH, "emails", `${name}.t.${kind}`)
}

function loadTemplateBody(info) {
  const path = pathForTemplate(info)
  const dummy = DUMMY_TEMPLATE
  // instead,
  // readFileSync
  //  const contents = LOAD THAT FILE
  return dummy
}

function templateFunc(info) {
  const body = loadTemplateBody(info)
  console.log("Templating", info.name, "body", body, info)
  const func = _.template(body)
  return func
}

export default Templates
