import React, { useEffect, useState } from "react";
import { useContext, createContext } from "react";
import axios from "axios";
import { CoinList } from "../config/api";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../Firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Crypto = createContext();
const CryptoState = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setsymbol] = useState("₹");
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(false);
  const [user, setuser] = useState([]);
  const [watchlist, setwatchlist] = useState([]);
  const [alert, setalert] = useState({
    open: false,
    msg: "",
    type: "success",
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setuser(user);
      else setuser(null);
      console.log(user);
    });
  }, []);
  const fetchCoins = async () => {
    const { data } = await axios.get(CoinList(currency));
    setloading(true);
    setcoins(data);
    setloading(false);
  };
  useEffect(() => {
    if (currency === "INR") setsymbol("₹");
    else if (currency === "USD") setsymbol("$");
  }, [currency]);
  // useEffect(() => {
  //   if (user) {
  //     const coinRef = doc(db, "watchlist", user?.uid);
  //     var unsubscribe = onSnapshot(coinRef, (coin) => {
  //       if (coin.exists()) {
  //         console.log(coin.data().coins);
  //         setwatchlist(coin.data().coins);
  //       } else {
  //         console.log("No Items in Watchlist");
  //       }
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   }
  // }, [user]);

  return (
    <Crypto.Provider
      value={{
        currency,
        symbol,
        setCurrency,
        coins,
        loading,
        fetchCoins,
        alert,
        setalert,
        setuser,
        user,
        watchlist,
      }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoState;
export const CryptoContext = () => {
  return useContext(Crypto);
};
