//import './App.css';
// import React,{useState} from 'react';
// const ParentApp=()=> {
//   const dataObj={
//     firstname:"durga",
//     lastname:"bhavani",
//     age:22
//   }
//   const[data,setData] = useState(dataObj);
//   return (
//     <div className="App">
//         <h1>Context Parent</h1>
//         <Child user={data}/>
//     </div> 
//   );
// }
// const Child=(props)=>{
//   return(
//     <div className="Child">
//       <h1>Child Component</h1>
//       <SubChild firstName={props.user.firstname} lastName={props.user.lastname} aGe={props.user.age}/>
//     </div>)
// }
// const SubChild=({firstName,lastName,aGe})=>{
//   return(
//     <div className="SubChild">
//       <h1>SubChild Component</h1>
//       <h1>
//           Firstname:{firstName}
//       </h1>
//       <h1>
//          Lastname:{lastName}
//       </h1>
//       <h1>
//          Age:{aGe}
//       </h1>
//     </div>
//       )
// }

// export default ParentApp;
