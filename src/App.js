import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import {Layout,Home,About,Skills,Project, Contact} from './pages';


function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/skills" element={<Layout><Skills /></Layout>} />
      <Route path="/project" element={<Layout><Project /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
