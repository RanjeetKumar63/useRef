// import React, { useEffect, useState, useRef } from "react";
// import "./App.css";
// import watch from "./watch";

// const App = () => {
//   const [count, setCount] = useState(0);
//   let val = useRef(0);
//   let btnRef = useRef();

//   const clickhandler = () => {
//     val.current = val.current + 1;
//     console.log("value of val:", val.current);
//     setCount(count + 1);
//   };

//   // it runs on every render
//   useEffect(() => {
//     console.log("main firse render ho gya hun");
//   });
//   const changeColor = () => {
//     btnRef.current.style.backgroundColor = "red";
//   };
//   return (
//     <div>
//       <watch />
//       <h1>Exotic_Coder</h1>
//       <br />
//       <button ref={btnRef} onClick={clickhandler}>
//         Increment
//       </button>
//       <br />
//       <button onClick={changeColor}>Change color of 1st Button </button>
//       <br />
//       <div>Count:{count}</div>

//       <br />
//       <br />
//       <watch />
//     </div>
//   );
// };

// export default App;

import React from "react";
import watch from "./watch";

const App = () => {
  return (
    <div>
      <watch />
    </div>
  );
};

export default App;
