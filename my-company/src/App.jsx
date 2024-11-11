import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
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
