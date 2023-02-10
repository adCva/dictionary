import React, { useState } from 'react';
// Icons.
import { BiChevronDown, BiMoon, BiSun } from "react-icons/bi";
import { GiBlackBook } from "react-icons/gi";
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
  };


  // Handle theme change.
  const handleTheme = () => {
    dispatch(changeTheme({newTheme: !isThemeDark}));
  }


  // Capitalize letter
  const capitalizeWords = (str) => {
    return str.replace(/\b[a-z]/g, function(char) {
      return char.toUpperCase();
    });
  };


  return (
    <div className={isThemeDark ? "nav-container nav-container-dark" : "nav-container"}>
      <GiBlackBook className="nav-icon" />
      <div className='interactive-container'>
        <div className='dropdown-container'>
          <button onClick={toggleDropDown}>{capitalizeWords(activeFont)} <BiChevronDown className='button-arrow-icon'/></button>
          <div className={`${isDropDownOpened ? 'show-dropdown-content dropdown-content' : 'hide-dropdown-content dropdown-content'}`}>
            <button onClick={() => handleChangingFont("serif")}>Serif</button>
            <button onClick={() => handleChangingFont("sans-serif")}>Sans Serif</button>
            <button onClick={() => handleChangingFont("monospace")}>Monospace</button>
          </div>
        </div>
        <div className='theme-container'>
          <div className="theme-switcher" onClick={handleTheme}>
            <button className={`switch ${isThemeDark ? "dark" : "light"}`} />
          </div>
          {isThemeDark ? <BiSun className="sun" /> : <BiMoon className='moon'/> }
        </div>
      </div>
    </div>
  )
}

export default Nav;