import React from "react";

// custom component
import Home from "./components/Home";
import StarrySky from "./components/StarrySky";

function App() {
  return (
    <StarrySky>
      <Home />
    </StarrySky>
  );
}

export default App;
