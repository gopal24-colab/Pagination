import "./App.css";
import { Home, Contact, Users, Products, UserDetails } from "./components";
import About from "./components/About";
import DefaultLayout from "./components/DefaultLayout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path={"userdetails/:id"} element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
