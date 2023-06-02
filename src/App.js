import "./App.css";
import HomeGuest from "./components/home/HomeGuest";
import Landing from "./loginModules/Landing";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App overflow-x-hidden bg-[#F8FAFC] w-screen h-screen">
      <Routes>
        <Route path="/" element={<HomeGuest />} />
        <Route path="/login" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
