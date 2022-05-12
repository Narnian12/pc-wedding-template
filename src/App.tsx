import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Link to="/event">Event</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/home">Home</Link>
          <Link to="/rsvp">RSVP</Link>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
