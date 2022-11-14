import EventEmitter from "eventemitter3";
import Beat from "./Beat";

const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
let count = 0;
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();
    this._beat.on(Beat.events.BIT, this._create);
    this.emit(Application.events.READY);
  }

    _create(){
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[count];
      document.querySelector(".main").appendChild(message);
      count++;
      if (count >= lyrics.length) {
        count = 0;
      }
    }
 
}
