import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import HomePage from "./pages/HomePage";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "./components/Alert";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      background: "#000",
      color: "white",
      minHeight: "100vh",
      paddingBottom: "30px",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <div className={classes.App}>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/coins/:id" component={CoinPage} />
        </Switch>
      </div>
      <Alert />
    </>
  );
}

export default App;
