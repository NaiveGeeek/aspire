import './App.css';
import DesktopView from './View/DesktopView';
import MobileView from './View/MobileView';

function App() {
  const isDesktop = window.screen.width >768;
  return ( isDesktop?<DesktopView/>:<MobileView/>);
}

export default App;
