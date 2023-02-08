import React, { useState } from 'react';
// Icons.
import { BiChevronDown, BiMoon, BiSun } from "react-icons/bi";
import { VscNotebook } from "react-icons/vsc";
// Redux.
import { useSelector, useDispatch } from 'react-redux';
import { newFont } from "../Redux/fontSlice";
import { changeTheme } from "../Redux/themeSlice";


function Nav() {
  const dispatch = useDispatch();
  const activeFont = useSelector((state) => state.font.activeFont);
  const isThemeDark = useSelector((state) => state.theme.isDarkTheme);
  // Local state.
  const [isDropDownOpened, setDropDownOpened] = useState(false);


  // Open dropdown.
  const toggleDropDown = () => {
    setDropDownOpened(!isDropDownOpened);
  };


  // Handle new font button click.
  const handleChangingFont = (font) => {
    dispatch(newFont({newActiveFont: font}));
    setDropDownOpened(false);
    console.log(activeFont);
  };


  // Handle theme change.
  const handleTheme = () => {
    console.log(isThemeDark);  
    dispatch(changeTheme({newTheme: !isThemeDark}));
  }


  // Capitalize letter
  const capitalizeWords = (str) => {
    return str.replace(/\b[a-z]/g, function(char) {
      return char.toUpperCase();
    });
  };


  return (
    <div className='nav-container'>
      <VscNotebook className={`nav-icon ${isThemeDark ? "nav-icon-dark": ""}`} />
      <div className='interactive-container'>
        <div className='dropdown-container'>
          <button onClick={toggleDropDown} className={isThemeDark ? "dark-font-btn" : ""}>{capitalizeWords(activeFont)} <BiChevronDown className='button-arrow-icon'/></button>
          <div className={`${isDropDownOpened ? 'show-dropdown-content dropdown-content' : 'hide-dropdown-content dropdown-content'} ${isThemeDark ? "dropdown-content-dark" : ""}`}>
            <button onClick={() => handleChangingFont("serif")}>Serif</button>
            <button onClick={() => handleChangingFont("sans-serif")}>Sans Serif</button>
            <button onClick={() => handleChangingFont("monospace")}>Monospace</button>
          </div>
        </div>
        <div className='theme-container'>
          <div className={`${isThemeDark ? "theme-switcher-dark theme-switcher" : "theme-switcher"}`} onClick={handleTheme}>
            <button className={`switch ${isThemeDark ? "dark" : "light"}`} />
          </div>
          {isThemeDark ? <BiMoon className="moon" /> : <BiSun className='sun'/> }
        </div>
      </div>
    </div>
  )
}

export default Nav;