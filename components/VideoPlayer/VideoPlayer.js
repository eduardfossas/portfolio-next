import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const VideoPlayer = ({ video }) => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [initialPlay, setInitialPlay] = useState(false);
  const [noAutoplay, setNoAutoplay] = useState(false);
  const [muted, setMuted] = useState(true);
  const timelineRaf = useRef();
  const timelineRef = useRef(null);
  const timelineInnerRef = useRef(null);

  // play the fucker on state change
  useEffect(() => {
    if (play) {
      const play = videoRef.current?.play();
      !!play &&
        play
          .then(() => {
            setInitialPlay(true);
          })
          .catch(() => {
            setNoAutoplay(true);
          });
    } else {
      videoRef.current?.pause();
    }
  }, [play]);

  // timeline animation
  useEffect(() => {
    const render = () => {
      if (!!videoRef.current && timelineInnerRef.current) {
        const deltaT = videoRef.current.currentTime / videoRef.current.duration;
        timelineInnerRef.current.style.scale = `${deltaT} 1`;
      }
      requestAnimationFrame(render);
    };

    !!play && (timelineRaf.current = requestAnimationFrame(render));
    return () => {
      cancelAnimationFrame(timelineRaf.current);
    };
  }, [play]);

  // player click
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (muted) {
        videoRef.current.currentTime = 0;
        setMuted(false);
      }

      if (play) {
        setPlay(false);
      } else {
        setPlay(true);
      }
    }
  };

  // timeline click
  const handleTimelineClick = (e) => {
    const timeline = timelineRef.current;
    const video = videoRef.current;
    if (!!timeline && !!video) {
      console.log(e);
      const x = (1 / timeline.clientWidth) * e.clientX;
      const time = video.duration * x;
      video.currentTime = time;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <video src={video} muted={true} playsInline loop ref={videoRef} preload />

      <div
        className="absolute w-full h-full inset-0 cursor-pointer"
        onClick={handleVideoClick}
      />
      <div
        className="absolute w-full h-2 bottom-0 left-0"
        onClick={handleTimelineClick}
        ref={timelineRef}
      >
        <div
          className="h-1 bg-indigo-600 w-full absolute bottom-0 origin-left scale-x-0"
          ref={timelineInnerRef}
        />
      </div>
    </div>
  );
};

export { VideoPlayer };
