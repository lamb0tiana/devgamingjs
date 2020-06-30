import * as PIXI from 'pixi.js';
/* import appConfig from "../configs/configurations"
console.log(appConfig) */
 require("../assets/css/app.css")
let app = new PIXI.Application({ 
    width: 256, 
    height: 256,                       
    antialias: true, 
    transparent: false, 
    resolution: 1
  }
);
const appConfig = {
  backgroundColor : 0x061639
}
//@ts-ignore
app.renderer.autoResize = true;
app.renderer.backgroundColor = appConfig.backgroundColor
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
const images = ["runner.gif","cat.png"]
images.forEach(imageFile =>{
  app.loader.add(`/dist/images/${imageFile}`)
})
app.loader
  .load(setup);

function setup() {
  images.forEach(imageFile =>{
    const resource = new PIXI.Sprite(app.loader.resources[`/dist/images/${imageFile}`].texture);
    app.stage.addChild(resource)
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