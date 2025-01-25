import AppLogo from "../../assets/sip_20250126_004711.png";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";

import "./Landing.css";
export default function Landing() {
  return (
    <div className="landing">
      <div className="Image-Container">
        <img src={AppLogo} alt="App Logo" />
      </div>
      <h1>Hello, Welcome!</h1>
      <button>Login</button>
      <button>Sign Up</button>
      <div className="Social-Media-Container">
        <p>Or via Social Media</p>
        <div className="social-media-links-Container">
          <IoLogoFacebook />
          <AiFillGoogleCircle />
          <ImLinkedin />
        </div>
      </div>
    </div>
  );
}
