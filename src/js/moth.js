export default class Moth {

  constructor() {
    this.stalk = null;
    this.audio = null;
    this.stage = null;
  }

  init() {
    this.stage = document.querySelector(".stage");
    this.stage.style.display = "block";
    this.stalk = document.querySelector(".stage--center-stalk");
    this.rightLeaf = document.querySelector(".stage--right-leaf");
    this.audio = document.querySelector(".flute-audio");
    this.play();
    this.events();
  }

  events() {
    this.stage.addEventListener('click', this.play.bind(this), false);
    this.stalk.addEventListener("animationend", this.stalkCompleted.bind(this), false);
    this.rightLeaf.addEventListener("animationend", this.leafCompleted.bind(this), false);
    this.audio.addEventListener('ended', this.musicCompleted.bind(this), false);
  }

  play() {
    this.stage.classList.add("start");
    this.audio.volume = 0.1;
    this.audio.play();
  }

  stalkCompleted() {
    this.stalk.classList.add('pulse');
  }

  leafCompleted() {
    setTimeout(() => {
      this.stage.classList.remove('start');
      this.stalk.classList.remove('pulse');
    }, 500);
  }

  musicCompleted(e) {
    this.audio.currentTime = 0;
  }
}
