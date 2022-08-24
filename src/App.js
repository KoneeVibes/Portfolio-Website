import './App.css';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
        <Router>
          <NavigationBar/>

          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='Resume' element={<Resume/>}></Route>
            <Route exact path='#'></Route>
            <Route exact path='#'></Route>
          </Routes>

        </Router>
        <Footer/>
    </div>
  );
}

export default App;
