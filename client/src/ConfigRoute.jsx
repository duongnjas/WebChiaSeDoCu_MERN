import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function ConfigRoute() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<>Page Not Found</>}/>
      </Routes>
    );
  }
  
  export default ConfigRoute;