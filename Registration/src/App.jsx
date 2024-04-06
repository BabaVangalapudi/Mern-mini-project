import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedContent from "./components/ProtectedContent";

function App() {
  const toastTrigger = (cond) => {
    if (cond === "success") {
      toast.success("Login Successful");
    } else {
      toast.error("Login Error");
    }
  };
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route
            path="/login"
            element={<Login toastTrigger={toastTrigger} />}
          ></Route>
          <Route element={<ProtectedContent />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
