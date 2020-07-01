const scaleToWindow = require("../plugins/scaleToWindow")
import {Application,Sprite,TextureCache} from "./common";

import appConfig from "../configs/configurations"
require("../assets/css/app.css")

let app = new Application(appConfig);

app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
let images = ["runner.gif","cat.png"]
images = images.map(i => `/dist/images/${i}`)
app.loader.add(images).load(setup);

function setup() {
  const tab = []
    const runnerTexture = app.loader.resources[images[0]].texture
    const runner = new Sprite(runnerTexture);

    app.stage.addChild(runner)


    let catTexture = app.loader.resources[images[1]].texture
    let cat = new Sprite(catTexture)

    app.stage.addChild(cat)
    setTimeout(() =>{
      runner.x = 900
    },2000)
}

