import logo from './logo.svg';
import Main from './component/main';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from './component/menu';
function App() {
  return (
    <div className="App">
        <Menu />
        <Main />
        
    </div>
  );
}

export default App;
