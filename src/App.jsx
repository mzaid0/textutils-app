import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar
        title="Text Utils"
        homeText="Home"
        aboutText="About"
        servicesText="Services"
        contactText="Contact"
      />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your Text" />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App
