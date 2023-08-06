import { Route, Routes } from "react-router-dom";
import Register from "./page/Register";
import Layout from "./components/layout/Layout";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import NewUser from "./page/NewUser";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-user" element={<NewUser />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
