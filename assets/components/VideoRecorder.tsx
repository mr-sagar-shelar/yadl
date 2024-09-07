import React from "react";
import { memo } from "react";

function ResizerNode() {
    let mediaStream: MediaStream = null;
    let settings: MediaTrackSettings = null;
    let videoEl: HTMLVideoElement = null;
    let mediaRecorder: MediaRecorder = null;

    const startRecording = async () => {
        mediaStream = await navigator.mediaDevices.getDisplayMedia({
            video: {
                frameRate: 60
            },
            audio: false,
            // @ts-ignore
            preferCurrentTab: true
        });

        videoEl.srcObject = mediaStream;
        settings = mediaStream.getVideoTracks()[0].getSettings();

        mediaRecorder = new MediaRecorder(mediaStream);
        mediaRecorder.addEventListener('dataavailable', (event) => {
            videoEl.srcObject = null;
            videoEl.src = URL.createObjectURL(event.data);
        });
        mediaRecorder.start();
    }

    const stopRecording = () => {
        mediaStream.getTracks().forEach((track) => track.stop());
    }


    React.useEffect(() => {
        videoEl = document.getElementById("video-el") as HTMLVideoElement;
    });

  return (
    <>
      <button className="btn btn-primary" onClick={startRecording}>Start Recording</button>
      <button className="btn btn-primary" onClick={stopRecording}>Stop Recording</button>
      <video id="video-el" controls autoPlay style={{ width: "100%", height: "400px"}} />
    </>
  );
}

export default memo(ResizerNode);
