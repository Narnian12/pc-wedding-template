import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Event from "./Pages/Event";
import Gallery from "./Pages/Gallery";
import Rsvp from "./Pages/Rsvp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/event" element={<Event />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/rsvp" element={<Rsvp />} />
    </Routes>
  </BrowserRouter>
);
