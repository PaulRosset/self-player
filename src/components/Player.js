import React, { Component } from "react";
import RxPlayer from "rx-player";
import { ContainerControls } from "./styles/Player";
import {
  faPlay,
  faVolumeOff,
  faArrowsAlt,
  faVolumeUp,
  faPause,
  faSpinner
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Player extends Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    this.player = new RxPlayer({
      videoElement: document.querySelector("video")
    });
    window.player = this.player;
    this.player.loadVideo({
      url:
        "http://vm2.dashif.org/livesim-dev/segtimeline_1/testpic_6s/Manifest.mpd",
      transport: "dash",
      autoPlay: true
    });
    this.setState({ isMounted: true });
  }

  fullScreen = () => {
    this.player.isFullscreen()
      ? this.player.setFullscreen(false)
      : this.player.setFullscreen(true);
  };

  playPause = () => {
    if (this.player.getPlayerState() === "PLAYING") {
      this.player.pause();
    } else {
      this.player.play();
    }
  };

  sound = () => {
    this.player.isMute() ? this.player.unMute() : this.player.mute();
  };

  render() {
    return (
      <div className="video-container">
        <video className="rx-player-root" />
        <ContainerControls>
          <div>
            <FontAwesomeIcon
              icon={faVolumeOff}
              style={{ fontSize: "1.4em", color: "#69ffd2" }}
              onClick={this.sound}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faPlay}
              style={{ fontSize: "1.4em", color: "#69ffd2" }}
              onClick={this.playPause}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faArrowsAlt}
              style={{ fontSize: "1.4em", color: "#69ffd2", opacity: 1 }}
              onClick={this.fullScreen}
            />
          </div>
        </ContainerControls>
        >
      </div>
    );
  }
}

export default Player;
