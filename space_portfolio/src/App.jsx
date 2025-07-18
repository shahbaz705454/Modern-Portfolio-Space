
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path='/' element=<Home></Home> />
        <Route path='*' element=<NotFound></NotFound> />

        
      </Routes>
      
      
      </BrowserRouter>

     
    </>
  )
}

export default App
