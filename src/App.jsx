import './App.css'
import  NavbarV1 from './components/NavbarV1.jsx'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Astros from './components/Astros.jsx'
import PrimarySearchAppBar from './components/AppBar.jsx'
import { Route,Routes } from 'react-router-dom'
import About from './components/About.jsx'


function App() {
  
  const linksData = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Astros',
      link: '/astros'
    },
  ]
  const header = 'Astrolabo';

  return (
    <>
      <Navbar links={linksData} header={header}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/astros" element={<Astros />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
