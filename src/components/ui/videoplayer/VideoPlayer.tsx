import React, { useEffect, useRef } from "react";

function VideoPlayer({ video_src }: { video_src: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play video automatically when `video_src` changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video element
      videoRef.current.play(); // Start playback
    }
  }, [video_src]);

  return (
    <div className="video_img_Container">
      <video
        className="w-full h-full"
        style={{ objectFit: "cover" }}
        ref={videoRef}
        src={video_src}
        playsInline
        // poster="https://blocks.astratic.com/videos/general-video.mp4"
        controls
      />
    </div>
  );
}

export default VideoPlayer;
