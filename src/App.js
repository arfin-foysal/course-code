
import './App.css';
import fakeData from './Data';
import { useState } from 'react';
import Header from './Components/Header/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from './Components/Shop/Shop';


function App() {

   const [course, setcourse] = useState(fakeData)
      
  return (
    <div className="App">
      <Header></Header>
      {course.map((val)=><Shop course={val}></Shop>)}
    </div>
  );
}

export default App;
