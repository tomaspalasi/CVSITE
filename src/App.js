import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './components/body/Body';
import './components/styles/style.scss'
import Portfolio from './components/body/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Body/>}/>
          <Route exact path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;