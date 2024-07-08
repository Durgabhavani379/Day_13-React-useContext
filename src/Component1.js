import React,{useState,createContext,useContext} from 'react';
const UserContext=createContext();
const Component1 = () => {
    const[user,setuser]=useState("Hello");
    return (
        <div>
          
            <UserContext.Provider value={user}>
            <h1>Component1</h1>
            <h1>{user}</h1>
            <hr/>
            <Component2 />
            </UserContext.Provider>
                
         
           
        </div>
    );
};


const  Component2= () => {
    return (
        <div>
            <h1>Component2</h1> 
            <hr/>
           <Component3 />
           
        </div>
    );
};
const  Component3= () => {
    return (
        <div>
            <h1>Component3</h1> 
            <hr/>
            <Component4 />
          </div>
    );
};
const  Component4= () => {
    const user=useContext(UserContext);
    return (
        <div>
            <h1>Component4</h1> 
            <h1>{user}</h1>
            <hr/>
            <Component5 />
          
        </div>
    );
};
const  Component5= () => {
    const user=useContext(UserContext);
    return (
        <div>
            <h1>Component5</h1> 
           
          <h1>{user}</h1>
          <hr/>
          
        </div>
    );
};

export default Component1;