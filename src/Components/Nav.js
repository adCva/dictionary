import React, { useState } from 'react';
// Icons.
import { BiBook, BiChevronDown, BiMoon, BiSun } from "react-icons/bi";
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
      <BiBook className={`nav-icon ${isThemeDark ? "nav-icon-dark": ""}`} />
      <div className='nav-btns-container'>
        <div className='dropdown-container'>
          <button onClick={toggleDropDown} className={isThemeDark ? "dark-font-btn" : ""}>{capitalizeWords(activeFont)} <BiChevronDown className='button-arrow-icon'/></button>
          <div className={isDropDownOpened ? 'show-dropdown-content dropdown-content' : 'hide-dropdown-content dropdown-content'}>
            <button onClick={() => handleChangingFont("serif")}>Serif</button>
            <button onClick={() => handleChangingFont("sans-serif")}>Sans Serif</button>
            <button onClick={() => handleChangingFont("monospace")}>Monospace</button>
          </div>
        </div>
        <div className='align-right'>
          <div className={`${isThemeDark ? "theme-switcher-dark theme-switcher" : "theme-switcher"}`} onClick={handleTheme}>
            <button className={`switch ${isThemeDark ? "dark" : "light"}`} />
          </div>
          {isThemeDark ? <BiMoon className={`moon ${isThemeDark ? "moon-dark" : ""}`}/> : <BiSun /> }
        </div>
      </div>
    </div>
  )
}

export default Nav;