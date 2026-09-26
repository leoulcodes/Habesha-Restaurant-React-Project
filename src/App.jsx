import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header/Header.jsx'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Footer from './components/Footer/Footer.jsx'
import Menu from './pages/Menu.jsx'
import Detail from './pages/Detail.jsx'


function App() {
  

  return (
    <Router>
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Menu" element={<Menu />} />
          <Route
          path="/menu/:slug"
          element={<Detail />} />
        </Routes>

      </main>
      <Footer />
    </div>
    </Router>
  )
}

export default App
