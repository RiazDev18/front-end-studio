// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div>
//       <SayHello/>
//       <SayHello/>
//       <SayHello/>
//     </div>
//   );
// }
// export default App;


// function SayHello(){
//   return <p>Hello World</p>;
// }

//vedio 2 p1 ends here 
//*********************************************************** */
//props

// export default function App(){
//   return(
//     <>
//         <Hello name="Riaz"/>
//         <Hello name="Hassan"/>
//         <Hello />
//     </>
//   );
// }
// function Hello(Props){
//   return <h1>Hello {Props.name}</h1>
// }
// 
//************************************************************ */
//vedio 3 p2 ends here

// export default function App(){
//   return (
//     <Comment username="Riaz"time={(new Date()).toString()}>
//       <h1>Hello World</h1>
//       <p>This is a comment</p>
//     </Comment>

//   );
// }

// function Comment({username, time , children}){
//   return(
//   <section>
//     <p>{username} commented at {time}</p>
//     {children}
//   </section>
//   )
// }


// vedio 3 ends here
//****************************************************************************8 */

//stats

// import { useState } from "react";
// export default function App(){
//   const [count, setCount] = useState(0);
//   const [otherCount, setOtherCount] = useState(5)
//   return(
//     <>
//   <button onClick={() => setCount(count +1)}>
//     Increment
//   </button>
//   <p>Count: {count}</p>
//   <button onClick={() => setOtherCount(otherCount +1)}>
//     Increment
//   </button>
//   <p>otherCount: {otherCount}</p>
//     </>
//   )
// }
//**********************************************************/
// import { useState } from "react";
// export default function App(){
// return (
//   <>
//    <Counter startingCount={10}/>
//    <Counter  />
//    </>
// );
// }

// function Counter({startingCount=0}){
//   const [count,setCount] = useState(startingCount);
//   // setCount({num:count.num}+1)

//   //spread the old obj
//   // setCount({...count,otherCount:0})
//   return(
//   <>
//   <button onClick={() =>setCount(count +1)
//   }>
//     Increment
//   </button>
//   <p>Count: {count}</p>
//   </>
//   )
// }
//********************************************************* */
// import { useState } from "react";
// export default function App(){
//   const [count,setCount] = useState(0);
//   const [value,setValue] = useState("");
// return (
//   <>
//   <input 
//   type="text"
//   value={value}
//   onChange={(event) => setValue(event.target.value)}
//   />
//    <Counter count={count} setCount={setCount}/>
//    <Counter count={count} setCount={setCount}/>
//    </>
// );
// }

// function Counter({count,setCount}){
//   return(
//   <>
//   <button onClick={() =>setCount(count +1)
//   }>
//     Increment
//   </button>
//   <p>Count: {count}</p>
//   </>
//   )
// }
import { useReducer } from "react";

function reducer(state,action){
  switch (action.type){
    case 'increment':
      return {count: state.count + action.num};
    case 'decrement':
      return {count: state.count - action.num};
      default:
        throw new Error('Unknowm action type');
  }
}
export default function App(){
  const [state, dispatch] = useReducer(reducer,{
    count:0
  });
return (
  <>
 
   <Counter 
   count={state.count} 
   onClick={() => dispatch({
    type :'increment',
    num:1
   })}/>
<Counter 
count={state.count} 
   onClick={() => dispatch({
    type :'decrement',
    num:1
   })}/>   </>
);
}

function Counter({count,onClick}){
  return(
  <>
  <button onClick={onClick}>
    Increment
  </button>
  <p>Count: {count}</p>
  </>
  )
}