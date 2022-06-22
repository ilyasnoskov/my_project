import UsersContainer from "./UsersContainer";
import { Carousel } from 'react-responsive-carousel';
import Slider from "./Slider";


function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='headLeft'>
          <img height={150} width={150} alt = 'logo' src = '/picture/logo.png'/>
          <div>
            <h3>SneakerShop</h3>
            <p>Best sneakers for you!</p>
          </div>
        </div>
        <ul className='headRight'>
          <li>
            <img width={40} height={40} alt = 'basket' src = '/picture/basket.png'/>

          </li>
          <li>
            <img width={40} height={40} alt = 'user' src = '/picture/user.png'/>
          </li>
        </ul>
      </header>
      <div>
        <Slider/>
      </div>
      <div className="content">
        <div className='text'>Товары</div>
          <UsersContainer/>
      </div>
    </div>
  );
}

export default App;
