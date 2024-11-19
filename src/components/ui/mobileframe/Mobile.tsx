
import "./mobile.css";

interface IMobileframe {
  video?: string;
  image?: string;
}

function MobileFrame({ video, image }: IMobileframe) {
  const commonStyle: React.CSSProperties = {
    objectFit: "cover", // This is a valid value for objectFit
    width: "100%",
    height: "100%",
    borderRadius: "28px",
  };

  return (
    <div className="mobile_container">
      <div className="specker_notch">
        <p className="speker_ele"></p>
        <p className="camera_ele"></p>
      </div>
      <p className="button left_top_btn"></p>
      <p className="button left_avarage_btn"></p>
      <p className="button left_bottom_btn"></p>
      <p className="button right_btn"></p>
      <div className="mobile_content">
        {image && <img style={commonStyle} src={image} alt="product" />}
        {video && <video src={video} loop autoPlay muted style={commonStyle} />}
      </div>
    </div>
  );
}

export default MobileFrame;
