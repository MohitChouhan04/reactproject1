import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'
import Contect from './component/Contect'
import Services from './component/Services'
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/footer.scss"
import "./styles/Contact.scss"
import "./styles/mediaquery.scss"





function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contect/>}/>
        <Route path='/service' element={<Services/>}/>
      </Routes>
      <Footer/>

    </Router>
  )
}

export default App