import React from "react";
import { memo } from "react";
import { fixWebmDuration } from "@fix-webm-duration/fix";
import getBlobDuration from "get-blob-duration";

function ResizerNode() {
  let mediaStream: MediaStream = null;
  let settings: MediaTrackSettings = null;
  let videoEl: HTMLVideoElement = null;
  let mediaRecorder: MediaRecorder = null;
  let videoData: any = null;
  const mimeType = "video/webm;codecs=h264";
  /*
options = { mimeType: 'video/webm;codecs=avc1,opus'};   //904KB
options = { mimeType: 'video/webm;codecs=h264,opus' };  //923KB
options = { mimeType: 'video/webm;codecs=vp9,opus' };   //1951KB
options = { mimeType: 'video/x-matroska;codecs=avc1' }; //917KB
options = { mimeType: 'video/webm;codecs=vp8,opus' };   //2687KB
options = { mimeType: 'video/webm;codecs=avc1' };       //917KB
options = { mimeType: 'video/webm;codecs=h264' };       //919KB
options = { mimeType: 'video/webm' };                   //906KB
options = { mimeType: '' };      
width: 2056,
height: 1329,

  */

  const startRecording = async () => {
    const blobSlice: BlobPart[] = [];
    mediaStream = await navigator.mediaDevices.getDisplayMedia({
      video: {
        width: 2056,
        height: 1329,
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
    mediaRecorder.addEventListener("dataavailable", async (event) => {
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
      videoData = finalBlob;
      videoEl.srcObject = null;
      videoEl.src = URL.createObjectURL(fixedBlob);
    };
    mediaRecorder.start();
  };

  const stopRecording = () => {
    mediaStream.getTracks().forEach((track) => track.stop());
    mediaRecorder.stop();
  };

  const convertToMp4 = async () => {
    const message = document.getElementById("message");
    const { fetchFile } = FFmpegUtil;
    const { FFmpeg } = FFmpegWASM;
    let ffmpeg = null;
    if (ffmpeg === null) {
      ffmpeg = new FFmpeg();
      ffmpeg.on("log", ({ message }) => {
        console.log(message);
      });
      ffmpeg.on("progress", ({ progress, time }) => {
        message.innerHTML = `${progress * 100} %, time: ${time / 1000000} s`;
      });
      await ffmpeg.load({
        coreURL: "/assets/core-mt/package/dist/umd/ffmpeg-core.js",
      });
      message.innerHTML = `Loading complete...`;
    }
    const name = 'toConvert.webm'
    await ffmpeg.writeFile(name, await fetchFile(URL.createObjectURL(videoData)));
    message.innerHTML = "Start transcoding";
    console.time("exec");
    await ffmpeg.exec(["-i", name, "output.mp4"]);
    console.timeEnd("exec");
    message.innerHTML = "Complete transcoding";
    console.error(` $$$ Completed Execution: ${name}`);
    const data = await ffmpeg.readFile("output.mp4");
    console.error(` $$$ Data FFMpeg: ${data}`);
    const video = document.getElementById("output-video");
    video.src = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" }),
    );
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
      <button className="btn btn-primary" onClick={convertToMp4}>
        Convert to MP4
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
