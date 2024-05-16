import "./landing.css";
import { BiDownArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import logo from "../../images/image1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import article_image from "../../images/article.svg";
import React, { useState } from "react";
// we will be using functional components through out
// not class component
const Landing = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
      setClick(!click);
    };


  const Navigate = useNavigate();
  function HandleBtnClick() {
    Navigate("/joinpage");
  }

    return (        
<>
    <div id="landing_page_wrapper">
                <header>
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>

                    <ul className={click ? "landbar active" : "landbar"}>
                        <li><Link to="/about" className="link hvr-curl-top-right">About</Link></li>
                        <li><a href="https://weblogin.lancs.ac.uk/login/?cosign-https-modules.lancaster.ac.uk&https://ghana-modules.lancaster.ac.uk/login/index.php" className="link hvr-curl-top-right" target="absolute">Portal</a></li>
                        <li><Link to="/loginpage" className="link hvr-curl-top-right">Sign In</Link></li> 
                    </ul>
          <div className="btn_container">
          <button onClick={handleClick}>
           {click ? <FaTimes /> : <FaBars />}
          </button>
        </div>
                </header>

                <section className="section_1">
                    <div className="section_text">
                        <div className="text_main_side">
                                <h2 className="animate__animated animate__bounceInDown ">LUG</h2>
                                <h4 className="animate__animated animate__bounceInLeft">SCHOLARSCRIBE</h4>
                                <p>Explore a world of writing and reading<br />skills</p>
                        </div>
                        <Button className={""} name={"get started"} onClick={HandleBtnClick}/>
                    </div>
                    <div className="section_svg">
                        <img src={article_image} alt="article_svg" />
                    </div>
                </section>

                {/* <div className="scroll">
                    <BiDownArrowAlt className="scroll_icon animate__animated animate__bounce animate__repeat-3"/>
                
                </div> */}
    </div>
</>
);
}



export default Landing;