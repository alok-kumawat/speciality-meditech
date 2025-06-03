// src/App.jsx
import AppRouter from './router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <ScrollToTopButton />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
