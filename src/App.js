import Layout from "./layout/layout";
import Content from "./layout/components/content" 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./features/home/home";
import History from "./features/history/history";
import Profile from "./features/profile/profile";

function App() {
  return (
    <Router>
        <Layout>
           <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/history" element={<History/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
           </Routes>
        </Layout>
    </Router>
  );
}

export default App;