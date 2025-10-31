import React from 'react';
import Props from './Props';
import { BsBrightnessLow } from "react-icons/bs";
import  { useState } from 'react';
import { BsBrightnessLowFill } from "react-icons/bs";
function Blog() {
    // const [show, setShow] = useState(false);
 const[word,setWord]=useState(false);
 const [icon, setIcon] = useState(false);
 const[colour,setColour]=useState(false);
  const [text, setText] = useState("");
     const counting= text.length;

  const[prac,setPrac]=useState(false);
 
  // const [show, setShow] = useState(false);
  // const [pass, setPass] = useState(""); 
  const [show, setShow] = useState(false);
  const [pass, setPass] = useState("");
  return (
    // <>
    //   {/* <Props hello="Hello from USA" />
    //   <Props hello="Namaste from India" /> */}
    // <div>
    //   {/* <button onClick={() => setShow(!show)}> */}
    //   <h2 onClick={() => setShow(!show)} >detail: { show ? 'Hide' : 'Show'}</h2> 
    //   {/* </button> */}

    //   {show && <p>This is the hidden text!</p>}
    // </div>



    // </>
    //  <>
    //   <h2 onClick={() => setWord(!word)}>
    //     detail: {word ? 'fulldetail' : 'dronika'}
    //   </h2>
    //   {word && (
    //     <ul>
    //       <li>dronika saini</li>
    //       <li>bca graduated</li>
    //       <li>fresher</li>
    //     </ul>
    //   )}
    // </>
  //  <>
  //     <h2 onClick={() => setIcon(!icon)}>
  //       {icon ? <BsBrightnessLow /> : <BsBrightnessLowFill />}
  //     </h2>

  //     {icon && (
  //       <div>
  //         <h3>dronika saini</h3>
  //         <h3>bca graduated</h3>
  //         <h3>fresher</h3>
  //       </div>
  //     )}
  //   </>
//  <>
//       <button
//         onClick={() => setColour(!colour)}
//         className={`px-6 py-3 text-lg font-semibold rounded-md  w-full h-screen ${
//           colour
//             ? "bg-black text-white"
//             : "bg-yellow-700 text-black"
//         }`}
//       >
//         click
//       </button>

//       {colour && <h1 className="text-center mt-4 text-3xl font-bold">dark mode</h1>}
//     </>

//  <>
//   return (
//     <div className="p-4 text-center">
//       <input
//         type="text"
//         placeholder="Type something..."
//         onChange={(e) => setText(e.target.value)}
//         className="border p-2"
//       />
//       <h3 className="mt-3">
//         {text ? text : "Nothing typed yet"}
        
//       </h3>
     
//          <h1>{counting} characters</h1>
//     </div>
  

// </>

 <div className="p-4 text-center">
      <input
        type={show ? "text" : "password"}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter password"
        className="border p-2"
      />
      <button
        onClick={() => setShow(!show)}
        className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        {show ? "Hide Password" : "Show Password"}
      </button>
    </div>


  );
}
 

export default Blog;
