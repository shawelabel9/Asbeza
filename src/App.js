import Layout from "./layout/layout";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./features/home/home";
import History from "./features/history/history";
import Profile from "./features/profile/profile";
import ItemsProvider from "./context/itemsProvider";

function App() {
  return (
    <Router>
        <Layout>
          <ItemsProvider>
            <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/history" element={<History/>}></Route>
                  <Route path="/profile" element={<Profile/>}></Route>
            </Routes>
          </ItemsProvider>
        </Layout>
    </Router>
  );
}

export default App;