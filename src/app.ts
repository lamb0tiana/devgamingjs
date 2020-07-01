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
  const sprites = []
  images.forEach(image => {
    const texture = app.loader.resources[image].texture
    const sprite = new Sprite(texture);
    app.stage.addChild(sprite)
    sprites.push(sprite)
  })

  setTimeout(() =>{
    sprites[0].texture =  TextureCache[images[1]]
    sprites[0].x = 600
  },2000)
}

