import Header from "./components/Header"
import Index from '../src/pages/Index'
import Bono from '../src/pages/Bono'
import '../src/styles/styles.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const Core = () => {
  return (
    <div className="krub-regular w-[320px]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bono" element={<Bono />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Core