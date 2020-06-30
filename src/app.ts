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

app.loader
  .add("/dist/images/runner.gif")
  .load(setup);

function setup() {
  let cat = new PIXI.Sprite(app.loader.resources["/dist/images/runner.gif"].texture);
  app.stage.addChild(cat);
}
 