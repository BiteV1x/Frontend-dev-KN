import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ContainerLab6 from "./pages/containerLab6";
import Profile from "./pages/profile";
import Lab5 from "./components/lab5";
import Lab5axios from "./components/lab5axios";
import Lab6Cookie from "./components/lab6Cookie";
import Lab6Local from "./components/lab6Local";
import Lab6Session from "./components/lab6Session";
import Lab2 from "./components/lab2";
import Lab4 from "./components/lab4";
import Lab4await from "./components/lab4await";

function App() {
  const userName = "Андрій";
  const numberValue = 10;
  const calculated = numberValue * 2;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/lab2"
            element={
              <Lab2
                name={userName}
                value={numberValue}
                expression={calculated}
                items={["яблуко", "груша", "слива"]}
              />
            }
          />
          <Route path="/lab4" element={<Lab4 />} />
          <Route path="/lab4await" element={<Lab4await />} />
          <Route path="/lab5" element={<Lab5 />} />
          <Route path="/lab5axios" element={<Lab5axios />} />
          <Route path="/containerLab6" element={<ContainerLab6 />}>
            <Route path="lab6Cookie" element={<Lab6Cookie />} />
            <Route path="lab6Local" element={<Lab6Local />} />
            <Route path="lab6Session" element={<Lab6Session />} />
          </Route>
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
