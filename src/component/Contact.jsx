import React from "react";
import { useState } from "react";

 function Contact () {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-3">📋 Form with Multiple Inputs</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              // onChange={(e) => setFormData({ ...formData, name: e.target.value })}

              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg font-medium">
              Hello <span className="text-blue-600">{formData.name}</span>,
            </p>
            <p className="text-gray-700">
              your email is <span className="font-semibold">{formData.email}</span>.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


export default Contact
// import React from "react";
// import { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [showSummary, setShowSummary] = useState(false); // true/false condition

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-3">📋 Form with Multiple Inputs</h2>

//         {/* Form */}
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
//           />
//           <button
//             onClick={() => setShowSummary(!showSummary)} // button click → summary show
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
//           >
//             Submit
//           </button>
//         </div>

//         {/* Summary */}
//         {showSummary && (
//           <div className="mt-6 text-center p-4 border-t border-gray-200">
//             <p className="text-lg font-medium">
//               Hello <span className="text-blue-600">{name}</span>,
//             </p>
//             <p className="text-gray-700">
//               your email is <span className="font-semibold">{email}</span>.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// } 
//  import React, { useState } from "react";

// export default function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [showSummary, setShowSummary] = useState(false);
//   const [submittedData, setSubmittedData] = useState({ name: "", email: "" });

//   const handleSubmit = () => {
//     setSubmittedData({ name, email }); // save current inputs
//     setName(""); // clear input
//     setEmail("");
//     setShowSummary(true); // show summary
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
//         <h2 className="text-xl font-semibold mb-3">📋 Form with Multiple Inputs</h2>

//         {/* Form */}
//         <div className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400 outline-none"
//           />
//           <button
//             onClick={handleSubmit} // button click → save & show summary
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
//           >
//             Submit
//           </button>
//         </div>

//         {/* Summary */}
//         {showSummary && (
//           <div className="mt-6 text-center p-4 border-t border-gray-200">
//             <p className="text-lg font-medium">
//               Hello <span className="text-blue-600">{submittedData.name}</span>,
//             </p>
//             <p className="text-gray-700">
//               your email is <span className="font-semibold">{submittedData.email}</span>.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
