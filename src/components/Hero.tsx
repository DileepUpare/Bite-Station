import loginvideo from '../Assets/videos/loginvideo.webm';
const Hero = () => {
  return (
    <div>

      <div>
        <video src={loginvideo} className="w-full h-full object-cover absolute z-0 top-0 left-0 " autoPlay loop muted />       
      </div>

    </div>

  );
};

export default Hero;