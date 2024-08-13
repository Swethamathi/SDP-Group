import React, { useState } from 'react';
import axios from 'axios';

const UserFeedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7777/api/feedback/submit', formData);
      console.log('Feedback submitted:', response.data);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <br />
      <hr />
      <section
        id="contact"
        className="py-10 relative"
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
                id="name"
                placeholder="Enter Your Name:"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-lg font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email:"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="text-lg font-medium">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                placeholder="Enter Your Phone Number:"
                maxLength="10"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-lg font-medium">
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Connect with Us..."
                cols="30"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <input
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
              value="Submit"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserFeedback;
