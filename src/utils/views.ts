import path from "node:path"
import { Eta } from "eta"

export const views = new Eta({
  autoTrim: false,
  autoEscape: false,
  varName: "props",
  views: path.join(import.meta.dirname, "../templates"),
})
