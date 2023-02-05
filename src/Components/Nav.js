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
      <BiBook />
      <div className='nav-btns-container'>
        <div className='dropdown-container'>
          <button onClick={toggleDropDown}>{capitalizeWords(activeFont)} <BiChevronDown/></button>
          <div className={isDropDownOpened ? 'dropdown-content' : 'hide-dropdown-content'}>
            <button onClick={() => handleChangingFont("serif")}>Serif</button>
            <button onClick={() => handleChangingFont("sans-serif")}>Sans Serif</button>
            <button onClick={() => handleChangingFont("monospace")}>Monospace</button>
          </div>
        </div>
        <div className='align-right'>
          <div className='theme-switcher' onClick={handleTheme}>
            <button className={`switch ${isThemeDark ? "dark" : "light"}`} />
          </div>
          {isThemeDark ? <BiMoon className='moon'/> : <BiSun /> }
        </div>
      </div>
    </div>
  )
}

export default Nav;