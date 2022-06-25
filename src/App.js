import UsersContainer from "./UsersContainer";
import { Carousel } from "react-responsive-carousel";
import Slider from "./Slider";
import Head from "./Head";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Shop from "./Shop";

function App() {
  return (
    <div className="App">
      <Head />
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
