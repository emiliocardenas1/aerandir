import _ from "lodash"
import Templates from "./Templates.js"

function getTemplateFunc(name) {
  const templateFunc = Templates[name]
  // therow an error if it's not found
  return templateFunc
}

export function render(name, info) {
  const func = getTemplateFunc(name)
  const content = func(info)
  // console.log("render", "name", name, "info", info, "result", content)
  return content
}
