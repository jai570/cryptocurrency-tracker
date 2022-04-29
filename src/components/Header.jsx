import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import logo from "../img/logo.png";
import { CryptoContext } from "../context/CryptoState";
import AuthModal from "./auth/AuthModal";
import { Link } from "react-router-dom";
import UserSidebar from "./auth/UserSidebar";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const { currency, setCurrency, user } = CryptoContext();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: "150px", cursor: "pointer" }}
              />
            </Link>

            {/* <Button color="inherit">Login</Button> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{
                  width: 100,
                  height: 40,
                  marginLeft: 15,
                  marginRight: 20,
                }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>

              {user ? <UserSidebar /> : <AuthModal />}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
