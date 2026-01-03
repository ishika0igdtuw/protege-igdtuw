import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Blog from "./pages/Blog";
import SplashScreen from './components/SplashScreen';
import Header from './components/Header'; // Apne folder structure ke hisaab se path check karein
import './styles/theme.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blogs" element={<Blog />} />

      </Routes>
    </Router>
  );
}

export default App;