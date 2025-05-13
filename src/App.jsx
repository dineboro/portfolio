import './scss/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WorkSection from './components/WorkSection';
import Home from './components/Home';
import ThemeProvider from './components/ThemeProvider';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/portfolio">
        <div className="app">
          <Header />
          <NavigationBar>
            <ThemeToggle/>

          </NavigationBar>
          <div className="content">
            <Routes>
              //<Route path="/work" element={<WorkSection />} />
              <Route path="/contact" element={<ContactSection />} />

              <Route path="/about" element={<About />} />
              <Route path="/" element={<Home />} />
              <Route path="/worksection" element={<WorkSection />} />
              <Route path="/contactsection" element={<ContactSection />} />
            </Routes>
          </div>
          <Footer />
        </div>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
