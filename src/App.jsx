import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} exact />
          <Route path="/about" element={<h2>About</h2>} exact />
          <Route path="/contacts" element={<h2>Contacts</h2>} exact />
          <Route path="/delivery" element={<h2>Delivery</h2>} exact />
        </Routes>
      </Layout>
    </div>
  );
}
