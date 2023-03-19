import "./footer.css";
import whitelogoimg from "./images/whitelogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div>
      <div className="mainFooterContainer">
        <div className="topFooterContainer">
          <div className="leftFooterContent">
            <h1>ready to get started</h1>
            <p>create new account and started saving</p>
          </div>
          <div className="rightFooterContent">
            <button className="footerButton">get started</button>
          </div>
        </div>
        <div className="bottomFooterContainer">
          <div className="leftBottomContent">
                <img src={whitelogoimg} alt="" />
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    <br />
                    elit. Tenetur quas sequi cumque deleniti explicabo ipsam
                    <br />
                    obcaecati quaerat laborum magnam voluptate quis natus suscipit
                    <br />
                    dolore, neque optio itaque numquam dolores eius.
                    </p>
                    <div className="iconContainer">
                <FacebookIcon className="footrIcons" />
                <TwitterIcon className="footrIcons"/>
                <InstagramIcon className="footrIcons"/>
                </div>
          </div>
          <div className="rightBottomContent">
            <span>quick link</span>
            <span>about us</span>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
