import React, { useState } from 'react';

const UserFeedback = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  return (
    <div>
      <section
        id="contact"
        className="py-16 relative"
        style={{ backgroundImage: "url('../image/contact.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-center mb-12">Feedback</h1>
        <div id="contact-box" className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-2/5 space-y-4">
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
                id="message"
                cols="30"
                rows="10"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
            />
          </form>
        </div>
        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
            Thanks for your valuable feedback!
          </div>
        )}
      </section>
    </div>
  );
};

export default UserFeedback;
