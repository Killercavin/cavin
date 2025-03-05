import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Community from './pages/Community'

export const App = () => {
    return (
        <>
                <Router>
                    <Navbar />
                    <div style={{ marginTop: '64px' }}>  {/* Adjust the margin-top based on your navbar height */}
                        <Routes>
                            <Route path='/projects' element={<Projects />} />
                            <Route path='/community' element={<Community />} />
                            <Route path='/' element={<Home />} />
                        </Routes>
                    </div>
                    <Footer />
                </Router>
        </>
    )
}