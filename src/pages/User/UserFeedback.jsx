import React from 'react';

const UserFeedback = () => {
  return (
    <div>
      <br></br>
            <hr/>
          <section
        id="contact"
        className="py-10 relative"
        style={{ backgroundImage: "url('../image/contact.jpg')" }}
        >
        <h1 className="text-5xl font-bold text-center mb-12">Feedback</h1>
        <div id="contact-box" className="flex justify-center">
          <form action="" className="w-2/5 space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="text-lg font-medium">
                Name:
              </label>
              <input
                type="text"
                name="myname"
                id="name"
                placeholder="Enter Your Name:"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-lg font-medium">
                Email:
              </label>
              <input
                type="email"
                name="myemail"
                id="email"
                placeholder="Enter Your Email:"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="text-lg font-medium">
                Phone Number:
              </label>
              <input
                type="number"
                name="number"
                id="phone"
                placeholder="Enter Your Phone Number:"
                maxLength="10"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-lg font-medium">
                Message:
              </label>
              <textarea
                name="Message"
                 placeholder="Connect with Us..."
                id="message"
                cols="30"
                rows="4"
                className="w-full p-2 border rounded {inputTextColor}"
              ></textarea>
            </div>
            <input
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </section>
    </div>
  )
}
export default UserFeedback

// import React from 'react';

// const UserFeedback = ({ theme }) => {
//   // Define colors based on the theme
//   const backgroundColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

//   return (
//     <div>
//       <hr />
//       <section
//         id="contact"
//         className={`py-16 relative ${backgroundColor}`}
//         style={{ backgroundImage: "url('../image/contact.jpg')" }}
//       >
//         <h1 className="text-5xl font-bold text-center mb-12">Feedback</h1>
//         <div id="contact-box" className="flex justify-center">
//           <form action="" className="w-2/5 space-y-4">
//             <div className="form-group">
//               <label htmlFor="name" className="text-lg font-medium">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 name="myname"
//                 id="name"
//                 placeholder="Enter Your Name:"
//                 className={`w-full p-2 border rounded ${inputTextColor}`}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email" className="text-lg font-medium">
//                 Email:
//               </label>
//               <input
//                 type="email"
//                 name="myemail"
//                 id="email"
//                 placeholder="Enter Your Email:"
//                 className={`w-full p-2 border rounded ${inputTextColor}`}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="phone" className="text-lg font-medium">
//                 Phone Number:
//               </label>
//               <input
//                 type="number"
//                 name="number"
//                 id="phone"
//                 placeholder="Enter Your Phone Number:"
//                 maxLength="10"
//                 className={`w-full p-2 border rounded ${inputTextColor}`}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="message" className="text-lg font-medium">
//                 Message:
//               </label>
//               <textarea
//                 name="Message"
//                 id="message"
//                 cols="30"
//                 rows="10"
//                 className={`w-full p-2 border rounded ${inputTextColor}`}
//               ></textarea>
//             </div>
//             <input
//               type="submit"
//               className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
//             />
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UserFeedback;
