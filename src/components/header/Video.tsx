const Video = () => {
  return (
    <video autoPlay loop muted className="h-screen -mt-36 w-full object-cover">
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
