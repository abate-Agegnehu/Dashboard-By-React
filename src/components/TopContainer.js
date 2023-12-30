import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import ai from "../components/image/ai.jpg";

function TopContainer() {
  useEffect(() => {
    const menuTarget = document.getElementById("menuChevron");

    const menuContain = document.getElementById("menuContainer");
    menuTarget.addEventListener("mouseenter", () => {
      menuContain.style.transform = "translateX(0px)";
    });

    menuContain.addEventListener("mouseleave", () => {
      menuTarget.style.transform = "rotate(0deg)";
      menuContain.style.transform = "translateX(300px)";
    });
  }, []);
  return (
    <div className='topContainer'>
      <div className='inputBox'>
        <input type='text' placeholder='Search item, collections' />
        <i>
          <BiSearchAlt />
        </i>
      </div>
      <div className='profileContainer'>
        <i className='profileIcon '>
          <FaBell />
        </i>
        <div className='profileImage'>
          <img src={ai} alt='' />
        </div>
        <p className='profileName'>Abate Age</p>
        <i className='menuChevron' id='menuChevron'>
          <FaChevronDown />
        </i>
        <div className='menuContainer' id='menuContainer'>
          <ul>
            <li>Web Design</li>
            <li>UI / UX</li>
            <li>Form Design</li>
            <li>UI Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
