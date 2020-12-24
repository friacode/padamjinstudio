import React, { useState } from "react";
import AppRouter from "components/Reouter";
import { authService } from "fbase";

function App(){
  const [isLoggedIn, setIsLoggedin] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; PadamJIN Studio {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
