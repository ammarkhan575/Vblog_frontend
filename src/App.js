import "./App.css";

import Landing from "./loginModules/Landing";
import { Route, Routes, useLocation } from "react-router";

import AppContainer from "./AppContainer";

function App() {
  const location = useLocation();

  return (
    <div className="App overflow-x-hidden bg-[#F8FAFC] w-screen h-screen">
      <Routes>
        <Route path="/login" element={<Landing />} />
        
      </Routes>

      {location.pathname !== "/login" && <AppContainer />}
    </div>
  );
}

export default App;
