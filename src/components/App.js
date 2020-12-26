import React, { useEffect, useState } from "react";
import AppRouter from "components/Reouter";
import { authService } from "fbase";

function App(){
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedin] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
      <footer>&copy; PadamJIN Studio {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
