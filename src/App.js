import Input from './Components/Input';
import Nav from './Components/Nav';
import Resault from './Components/Resault';
import './Reset.css';
import "./Scss/style.css";
// Redux.
import { useSelector } from 'react-redux';

function App() {
  const isThemeDark = useSelector((state) => state.theme.isDarkTheme);
  const activeFont = useSelector((state) => state.font.activeFont);

  return (
    <div className={`App ${isThemeDark ? "dark-bg" : "light-bg"} font-${activeFont}`}>
      <div className='app-wrapper'>
        <Nav />
        <Input />
        <Resault />
      </div>
    </div>
  );
}

export default App;