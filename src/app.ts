import {Application,Sprite} from "./common";

import appConfig from "../configs/configurations"
require("../assets/css/app.css")

let app = new Application(appConfig);

app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
const images = ["runner.gif","cat.png"]
images.forEach(imageFile =>{
  app.loader.add(`/dist/images/${imageFile}`)
})
app.loader
  .load(setup);

function setup() {
  const tab = []
  images.forEach(imageFile =>{
    const resource = new Sprite(app.loader.resources[`/dist/images/${imageFile}`].texture);
    app.stage.addChild(resource)
    tab.push(resource)
  })

}
 /*
function setup() {
  //@ts-ignore
  const texture = PIXI.utils.TextureCache["/dist/images/runner.gif","/dist/images/runner.gif"];
  let cat = new PIXI.Sprite(texture);
  app.stage.addChild(cat);
}
 */