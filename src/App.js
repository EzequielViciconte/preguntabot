import logo from './logo.svg';

/***** Componentes  *****/
import Home from './pages/Home'

import './App.css';


import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='Contenedor'>
            <Routes>
              <Route path='/' element={<Home/>}/>
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
