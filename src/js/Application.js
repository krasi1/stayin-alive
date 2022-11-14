import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this._beat = new Beat();

    const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
    let count = 0;

    document.addEventListener(Beat.events.BIT, function _create() {
      console.log("hi");
      const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyrics[count];
      document.querySelector(".main").appendChild(message);
      if(count > lyrics.length)
      {
        count = 0;
      }
      count++;   
    });

      

    

    this.emit(Application.events.READY);
  }
}
