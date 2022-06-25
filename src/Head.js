import { NavLink } from "react-router-dom";
import "./index.scss";

const Head = () => {
  // debugger;
  return (
    <div>
      <header className="header">
        <div className="headLeft">
          <NavLink to = "/shop">
            <img height={150} width={150} alt="logo" src="/picture/logo.png" />
          </NavLink>
          <div>
            <h3>SneakerShop</h3>
            <p>Best sneakers for you!</p>
          </div>
        </div>
        <ul className="headRight">
          <li>
            <img
              width={40}
              height={40}
              alt="basket"
              src="/picture/basket.png"
            />
          </li>
          <li>
            <NavLink to="">
              <img width={40} height={40} alt="user" src="/picture/user.png" />
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Head;
