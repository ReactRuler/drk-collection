import "./TopVideo.css";

function TopVideo() {
  return (
    <div className="top-video-section">
      <video autoPlay muted loop playsInline>
        <source src={window.SHOPIFY_ASSETS?.video || "/DRK_video.mp4"} type="video/mp4" />
      </video>
      <div className="video-overlay-content">
        <a href="#">
          <img src={window.SHOPIFY_ASSETS?.button1 || "/DRK_button1.gif"} alt="Button 1" />
        </a>
        <a href="#">
          <img src={window.SHOPIFY_ASSETS?.button2 || "/DRK_button2.gif"} alt="Button 2" />
        </a>
      </div>
    </div>
  );
}

export default TopVideo;

