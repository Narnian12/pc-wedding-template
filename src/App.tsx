import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import styled from "@emotion/styled";

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
          <MenuItemWrapper>
            <Link to="/event">
              <Button color="inherit">Event</Button>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Link to="/gallery">
              <Button color="inherit">Gallery</Button>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Link to="/home">
              <Button color="inherit">Home</Button>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Link to="/rsvp">
              <Button color="inherit">RSVP</Button>
            </Link>
          </MenuItemWrapper>
          <MenuItemWrapper>
            <Button color="inherit">
              <Button color="inherit">Login</Button>
            </Button>
          </MenuItemWrapper>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;

const MenuItemWrapper = styled.div`
  margin: 5px;
`;
