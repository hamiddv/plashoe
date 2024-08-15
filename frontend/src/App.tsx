import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Header} from "./Components/Header/Header.tsx";
import {Home} from "./Pages/Home/Home.tsx";
import {Footer} from "./Components/Footer/Footer.tsx";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}


export default App;
