import React from 'react';
import {
  Panel,
  useReactFlow,
  getNodesBounds,
  getViewportForBounds,
} from '@xyflow/react';
import { toCanvas } from 'html-to-image';


const imageWidth = 1024;
const imageHeight = 768;

function DownloadButton() {
  const { getNodes } = useReactFlow();
  const onClick = () => {
    // we calculate a transform for the nodes so that all nodes are visible
    // we then overwrite the transform of the `.react-flow__viewport` element
    // with the style option of the html-to-image library
    const nodesBounds = getNodesBounds(getNodes());
    const viewport = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2,
      0
    );

    // toCanvas(document.querySelector('.react-flow__viewport',), {
    //   backgroundColor: '#1a365d',
    //   width: imageWidth,
    //   height: imageHeight,
    //   style: {
    //     width: imageWidth,
    //     height: imageHeight,
    //     transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
    //   },
    // }).then((canvas) => {
    //   console.log(' $$$$$$$$$$');
    //   const imgData = canvas.toDataURL('image/png');
    //   const a = document.createElement('a');

    //   a.setAttribute('download', 'reactflow.png');
    //   a.setAttribute('href', imgData);
    //   a.click();
    //   console.log(` $$$$$$$$$$ = ${imgData}`);

    // });
    

    var shots  = [];
    var grabLimit = 30;  // Number of screenshots to take
    var grabRate  = 100; // Miliseconds. 500 = half a second
    
    var count = 0;
    
    function postResults() {
       console.log(`START---------${shots.length}`);
       for (var i = 0; i < shots.length; i++) {
          // document.write(shots[i]+"<br />");
          const a = document.createElement('img');
          a.setAttribute('src', `data:image/png;base64,${shots[i]}`);
          // console.log(shots[i]+"<br />");
          document.body.appendChild(a);
       }    
       console.log("END-----------");
    }
    
    var grabber = setInterval(function(){
      count++;
    
      if (count>grabLimit) {
        clearInterval(grabber);
        postResults();
      }
    
      // var img     = canvas.toDataURL("image/png");
      toCanvas(document.querySelector('.react-flow__viewport'), {
        backgroundColor: '#1a365d',
        width: imageWidth,
        height: imageHeight,
        style: {
          width: imageWidth,
          height: imageHeight,
          transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
        },
      }).then((canvas) => {
        console.log(`$$$$$$$$$$ ${count}`);
        const imgData = canvas.toDataURL('image/png');
        shots.push(imgData.replace("data:image/png;base64,",""))
        // console.log(` $$$$$$$$$$ = ${imgData}`);
      });
    }, grabRate);

    // let framerate = 30;
    // var capturer = new CCapture({  
    //   format: 'gif',  
    //   framerate,  
    //   name: 'noise_visualization',  
    //   quality: 100, 
    //   verbose: true,
    //   workerPath: '/js/gif.worker.js',
    // });
  
    //   capturer.start();
    //   setTimeout(()=>{
    //     console.log('Stopped11');

    //     capturer.stop();
    //     console.log('Stopped');
    //   },1000);

    // Create a capturer that exports an animated GIF
    // Notices you have to specify the path to the gif.worker.js 
    // var capturer = new CCapture( { format: 'gif', workersPath: 'js/' } );

    // // Create a capturer that exports PNG images in a TAR file
    // var capturer = new CCapture( { format: 'png' } );

    // // Create a capturer that exports JPEG images in a TAR file
    // var capturer = new CCapture( { format: 'jpg' } );

    // toPng(document.querySelector('.react-flow__viewport'), {
    //   backgroundColor: '#1a365d',
    //   width: imageWidth,
    //   height: imageHeight,
    //   style: {
    //     width: imageWidth,
    //     height: imageHeight,
    //     transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
    //   },
    // }).then(downloadImage);
  };

  return (
    <Panel position="top-right" style={{ top: 20}}>
      <button className="download-btn" onClick={onClick}>
        Download Video
      </button>
    </Panel>
  );
}

export default DownloadButton;
