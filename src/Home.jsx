import React from "react";
import logoimg from "./images/logo.png";
import bannerimg from "./images/banner.png";
import img2content from "./images/img2.png";
import img5content from "./images/img5.png";
import img6content from "./images/img6.png";
import img67content from "./images/img7.png";
import quotecontent from "./images/quote.png";
import image38content from "./images/image38.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./home.css";

function Home() {
  return (
    <>
      <div className="mainContainer">
        <div className="navContainer">
          <div className="leftNavContainer">
            <img src={logoimg} alt="main logo" />
          </div>
          <div className="middleNavContainer">
            <ul>
              <li>how it works</li>
              <li>pakages</li>
              <li>benefits</li>
            </ul>
          </div>
          <div className="rightNavContainer">
            <button className="login">login</button>
            <button className="signup">signup</button>
          </div>
        </div>
        {/* middle body container  */}
        <div className="mainSavingContainer">
          <div className="savingContainerLeft">
            <h1>
              saving to secure
              <br /> the future
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Maxime quaerat dolorum nihil dicta minus animi perferendis
              <br />
              distinctio. Suscipit, optio labore pariatur quae asperiores <br />{" "}
              veritatis modi expedita eveniet sunt explicabo quibusdam?
            </p>
            <button className="savingButton">get start</button>
          </div>
          <div className="savingContainerRight">
            <img src={bannerimg} alt="" />
          </div>
        </div>
        {/* how it works body container  */}

        <div className="mainContainerWork">
          <div className="topContainerWork">
            <h1>how it work</h1>
          </div>
          <div className="bottomContainerWork">
            <div className="contentContainerWork">
              <img src={img2content} alt="" />
              <h1>register</h1>
              <p>
                Lorem ipsum dolor sit
                <br />
                amet consectetur adipisicing
                <br />
                elit. Repudiandae ipsam qui at
                <br />
                voluptateconsequuntur eos
                <br />
                consequuntur eos provident
              </p>
              <hr className="bottomLine" />
            </div>
            <div className="contentContainerWork">
              <img src={img2content} alt="" />
              <h1>save</h1>
              <p>
                Lorem ipsum dolor sit
                <br />
                amet consectetur adipisicing
                <br />
                elit. Repudiandae ipsam qui at
                <br />
                voluptateconsequuntur eos
                <br />
                consequuntur eos provident
              </p>
              <hr className="bottomLine" />
            </div>
            <div className="contentContainerWork">
              <img src={img2content} alt="" />
              <h1>get interest</h1>
              <p>
                Lorem ipsum dolor sit
                <br />
                amet consectetur adipisicing
                <br />
                elit. Repudiandae ipsam qui at
                <br />
                voluptateconsequuntur eos
                <br />
                consequuntur eos provident
              </p>
              <hr className="bottomLine" />
            </div>
            <div className="contentContainerWork">
              <img src={img2content} alt="" />
              <h1>withdraw</h1>
              <p>
                Lorem ipsum dolor sit
                <br />
                amet consectetur adipisicing
                <br />
                elit. Repudiandae ipsam qui at
                <br />
                voluptateconsequuntur eos
                <br />
                consequuntur eos provident
              </p>
              <hr className="bottomLine" />
            </div>
          </div>
        </div>
        {/* why choose us container  */}
        <div className="mainChooseContainer">
          <div className="chooseContainerLeft">
            <h1>
              access to load for various
              <br /> purposes
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br />
              elit. Maxime quaerat dolorum nihil dicta minus
              <br />
              animi perferendis distinctio. Suscipit, optio
              <br />
              labore pariatur quae asperiores veritatis modi
              <br />
              expedita eveniet sunt explicabo quibusdam?
            </p>
            <button className="chooseButton">get start</button>
          </div>
          <div className="middleChooseContainer">
            <h1> why choose us</h1>
          </div>
          <div className="chooseContainerRight">
            <img src={img5content} alt="" />
          </div>
        </div>
        {/* access to internship container  */}
        <div className="mainInternshipContainer">
          <div className="internshipContainerLeft">
            <img src={img6content} alt="" />
          </div>
          <div className="internshipContainerRight">
            <h1>access to internship</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br />
              elit. Maxime quaerat dolorum nihil dicta minus
              <br />
              animi perferendis distinctio. Suscipit, optio
              <br />
              labore pariatur quae asperiores veritatis modi
              <br />
              expedita eveniet sunt explicabo quibusdam?
            </p>
            <button className="internshipButton">get start</button>
          </div>
        </div>
        {/* dedicated interest rate container */}
        <div className="mainDedicatedContainer">
          <div className="dedicatedContainerRight">
            <h1>
              dedicated interest rate on
              <br /> saving
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              <br />
              elit. Maxime quaerat dolorum nihil dicta minus
              <br />
              animi perferendis distinctio. Suscipit, optio
              <br />
              labore pariatur quae asperiores veritatis modi
              <br />
              expedita eveniet sunt explicabo quibusdam?
            </p>
            <button className="dedicatedButton">get start</button>
          </div>
          <div className="dedicatedContainerRight">
            <img src={img67content} alt="" />
          </div>
        </div>
        {/* package container display  */}
        <div className="mainPackagesContainer">
          <div className="topPackageContainer">
            <h1>packages</h1>
          </div>
          <div className="bottomPackageContainer">
            <div className="packageContentContainer">
              <h1>student</h1>
              <p>
                save at least <b>N100</b> per week
              </p>
              <p>
                <b>8%</b>interest rate
              </p>
              <p>
                Access to loan upto <b>200%</b>
                <br /> of your entire savings
              </p>
              <p>
                access to internship
                <br /> for loan repayment
              </p>
              <p>
                withdrawal of money is at a<br /> minimum period of 3 month
              </p>
              <hr className="packageBottomLine" />

              <button className="choosPlan">choose plan</button>
            </div>
            <div className="packageContentContainer">
              <h1>student</h1>
              <p>
                save at least <b>N100</b> per week
              </p>
              <p>
                <b>8%</b>interest rate
              </p>
              <p>
                Access to loan upto <b>200%</b>
                <br /> of your entire savings
              </p>
              <p>
                access to internship
                <br /> for loan repayment
              </p>
              <p>
                withdrawal of money is at a<br /> minimum period of 3 month
              </p>
              <hr className="packageBottomLine" />

              <button className="choosPlan">choose plan</button>
            </div>
            <div className="packageContentContainer">
              <h1>student</h1>
              <p>
                save at least <b>N100</b> per week
              </p>
              <p>
                <b>8%</b>interest rate
              </p>
              <p>
                Access to loan upto <b>200%</b>
                <br /> of your entire savings
              </p>
              <p>
                access to internship
                <br /> for loan repayment
              </p>
              <p>
                withdrawal of money is at a<br /> minimum period of 3 month
              </p>
              <hr className="packageBottomLine" />

              <button className="choosPlan">choose plan</button>
            </div>
          </div>
        </div>
      </div>
      {/* comment session container  */}
      <div className="mainCommentContainer">
        <div className="commentContentcontainer">
          <div className="leftCommentContentContainer">
            <img src={quotecontent} alt="" />
            <h1>
              what our
              <br />
              customer are
              <br />
              saying
            </h1>
            <div className="arrowContainer">
              <ArrowRightAltIcon className="commentIcons" />
              <KeyboardBackspaceIcon className="commentIcons" />
            </div>
          </div>
          <div className="rightCommentContentContainer">
            <div className="mainRightCommentContent">
              <div className="rightCommentContent">
                <p>
                  Lorem ipsum dolor sit, amet consectetur
                  <br />
                  adipisicing elit. Nihil cum praesentium
                  <br />
                  expedita deleniti quas beatae? Autem quis
                  <br />
                  impedit atque quas distinctio id accusantium vel
                  <br />
                  ad inventore aliquam? Aperiam, perspiciatis dolor.
                </p>
                <img src={image38content} alt="" />
              </div>
              <div className="rightCommentContent">
                <p>
                  Lorem ipsum dolor sit, amet consectetur
                  <br />
                  adipisicing elit. Nihil cum praesentium
                  <br />
                  expedita deleniti quas beatae? Autem quis
                  <br />
                  impedit atque quas distinctio id accusantium vel
                  <br />
                  ad inventore aliquam? Aperiam, perspiciatis dolor.
                </p>
                <img src={image38content} alt="" />
              </div>
            </div>
              <div className="dotContainer">
                <MoreHorizIcon className="dotNav" />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
