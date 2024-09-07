import React from "react";
import { memo } from "react";
// import { FFmpeg } from '@ffmpeg/ffmpeg';
// import { fetchFile, toBlobURL } from '@ffmpeg/util';
import { fixWebmDuration } from "@fix-webm-duration/fix";
import getBlobDuration from "get-blob-duration";

function ResizerNode() {
  let mediaStream: MediaStream = null;
  let settings: MediaTrackSettings = null;
  let videoEl: HTMLVideoElement = null;
  let mediaRecorder: MediaRecorder = null;
  const mimeType = "video/webm;codecs=h264";

  const startRecording = async () => {
    const blobSlice: BlobPart[] = [];
    mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        width: 1280,
        height: 720,
        frameRate: 60,
      },
      audio: false,
      // @ts-ignore
      preferCurrentTab: true,
    });

    videoEl.srcObject = mediaStream;
    settings = mediaStream.getVideoTracks()[0].getSettings();

    mediaRecorder = new MediaRecorder(mediaStream, {
      mimeType: mimeType,
    });
    // mediaRecorder.addEventListener('dataavailable', (event) => {
    //   videoEl.srcObject = null;
    //   videoEl.src = URL.createObjectURL(event.data);
    // });
    // mediaRecorder.start();
    mediaRecorder.addEventListener("dataavailable", async (event) => {
      // videoEl.srcObject = null;
      // videoEl.src = URL.createObjectURL(event.data);
      // const duration = await getBlobDuration(event.data)
      // console.log(duration + ' seconds')
      // const fixedBlob = await fixWebmDuration(event.data, duration);
      // videoEl.src = URL.createObjectURL(fixedBlob);

      var data = event.data;
      if (data && data.size > 0) {
        blobSlice.push(data);
      }
    });
    mediaRecorder.onstop = async () => {
      console.error(` $$$$ Stoppeding`);
      const finalBlob = new Blob([...blobSlice], { type: "video/webm" });
      const duration = await getBlobDuration(finalBlob);
      console.log(duration + " seconds");
      const fixedBlob = await fixWebmDuration(finalBlob, duration * 1000);
      videoEl.srcObject = null;
      videoEl.src = URL.createObjectURL(fixedBlob);
      // const fixBlob = await fixWebmDuration(new Blob([...blobSlice]));
    };
    mediaRecorder.start();

    ///////////////////////////
    // mediaRecorder.onstop = async () => {
    //   const duration = Date.now() - startTime;
    //   const buggyBlob = new Blob(mediaParts, { type: "video/webm" });
    //   const fixedBlob = await fixWebmDuration(buggyBlob, duration);
    //   videoEl.srcObject = null;
    //   videoEl.src = URL.createObjectURL(fixedBlob);
    // };
    // mediaRecorder.ondataavailable = (event) => {
    //     var data = event.data;
    //     if (data && data.size > 0) {
    //         mediaParts.push(data);
    //     }
    // };
  };

  const stopRecording = () => {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaRecorder.stop();
  };

  React.useEffect(() => {
    videoEl = document.getElementById("video-el") as HTMLVideoElement;
  });

  return (
    <>
      <button className="btn btn-primary" onClick={startRecording}>
        Start Recording
      </button>
      <button className="btn btn-primary" onClick={stopRecording}>
        Stop Recording
      </button>
      <video
        id="video-el"
        controls
        autoPlay
        style={{ width: "100%", height: "400px" }}
      />
    </>
  );
}

export default memo(ResizerNode);
