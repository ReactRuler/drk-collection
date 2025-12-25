import { useEffect, useState } from "react";
import "./TopVideo.css";

function TopVideo() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [button1Src, setButton1Src] = useState(null);
  const [button2Src, setButton2Src] = useState(null);

  useEffect(() => {
    if (window.SHOPIFY_ASSETS) {
      setVideoSrc(window.SHOPIFY_ASSETS.video);
      setButton1Src(window.SHOPIFY_ASSETS.button1);
      setButton2Src(window.SHOPIFY_ASSETS.button2);
    } else {
      setVideoSrc("/DRK_video.mp4");
      setButton1Src("/DRK_button1.gif");
      setButton2Src("/DRK_button2.gif");
    }
  }, []);

  return (
    <div className="top-video-section">
      {videoSrc && (
        <video autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="video-overlay-content">
        {button1Src && (
          <a href="#">
            <img
              src={button1Src}
              alt="Button 1"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </a>
        )}
        {button2Src && (
          <a href="#">
            <img
              src={button2Src}
              alt="Button 2"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default TopVideo;
