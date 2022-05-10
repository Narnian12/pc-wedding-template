import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Gallery from './pages/Gallery';
import Rsvp from './pages/Rsvp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/rsvp">
          <Rsvp />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
