import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValid = emailRegex.test(value);
    setIsValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setShowMessage(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Introducir correo electrónico
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              isValid ? 'border-green-500' : 'border-red-500'
            }`}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isValid ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            }`}
            type="submit"
            disabled={!isValid}
          >
            Enviar
          </button>
        </div>
        {showMessage && (
          <div className="mt-4 text-green-500 font-bold">
            ¡Gracias! Se enviará un correo de confirmación en breve.
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter;