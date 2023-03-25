import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './HomePage/Home';

function Pages() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />}> </Route>
            </Routes>
        </Router>
    )
}

export default Pages;