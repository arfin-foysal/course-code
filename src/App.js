import "./App.css";
import fakeData from "./Data";
import { useState } from "react";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";

function App() {
  const [course, setcourse] = useState(fakeData);
  const [cart, setcard] = useState([]);
  const handelClick = (course) => {
    const newCart = [...cart, course];
    setcard(newCart);
  };

  return (
    <div>
      <Header course={cart}></Header>
      <Container>
        <div className="App">
          <div className="fastCont">
            {course.map((val) => (
              <Shop handelClick={handelClick} course={val}></Shop>
            ))}
          </div>
          <div className="secCont">
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
