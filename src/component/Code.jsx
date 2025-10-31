// import React, { useState } from "react";

// function Button() {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     if (isClicked) {
//       setIsClicked(false);
//     } else {
//       setIsClicked(true);
//     }
//   };

//   return (
//     <>
//       <h2>Status: {isClicked ? 'on' : 'off'}</h2>
//       <button onClick={handleClick}>Toggle</button>
//     </>
//   );
// }

// export default Button;
// import { useState } from "react";
// import React from "react";
// export default function PasswordToggle() {
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-3">3️⃣ Toggle Password Visibility</h2>

//         <div className="flex items-center space-x-2">
//           <input
//             type={show ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-purple-400 outline-none"
//           />

//           <button
//             onClick={() => setShow(!show)}
//             className="bg-purple-500 hover:bg-purple-600 text-white rounded-md px-3 py-2"
//           >
//             {show ? "Hide" : "Show"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
 import React, { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-300"
      style={{ backgroundColor: color || "#f3f4f6" }}
    >
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-3">🎨 Color Changer</h2>

        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="Enter color name or hex code (e.g. red / #00ff00)"
          className="w-full border border-gray-300 rounded-md p-2 text-center focus:ring-2 focus:ring-blue-400 outline-none"
        />

        <p className="mt-3 text-gray-700">
          Current color: {color || "none"}
        </p>
      </div>
    </div>
  );
}
