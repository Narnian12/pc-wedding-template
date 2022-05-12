import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Link to="/event">Event</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/home">Home</Link>
      <Link to="/rsvp">RSVP</Link>
    </>
  );
}

export default App;
