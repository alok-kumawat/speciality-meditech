// src/router/index.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import CategoryPage from '../pages/CategoryPage'
// import Contact from '../pages/Contact'
// import Media from '../pages/Media'
// import Blogs from '../pages/Blogs'
// import Careers from '../pages/Careers'

const AppRouter = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<CategoryPage />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/media" element={<Media />} /> */}
      {/* <Route path="/blogs" element={<Blogs />} /> */}
      {/* <Route path="/careers" element={<Careers />} /> */}
    </Routes>
)

export default AppRouter
