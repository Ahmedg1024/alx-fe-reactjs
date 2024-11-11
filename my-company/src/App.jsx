import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/Contact' element={ <Contact /> } />
      <Route path='/About' element={ <About /> } />
      <Route path='/Services' element={ <Services /> } />
      </Routes>
    </>
  );
}

export default App
