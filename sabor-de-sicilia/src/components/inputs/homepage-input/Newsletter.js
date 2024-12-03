import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./newsletter.css"

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { t } = useTranslation();

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
    <div className="prefoot-input mt-10 md:m-0 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            {t("input.prefoot.label")}
          </label>
          <div className="flex">
            <input
              className={`shadow appearance-none border w-full py-2 px-3 leading-tight ${isValid ? 'valid' : ''}`}
              id="email"
              type="email"
              placeholder={t("input.prefoot.placeholder")}
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className={`py-2 px-3 ${isValid ? "opacity-100" : "opacity-50 cursor-not-allowed"}`
              }
              type="submit"
              disabled={!isValid}
            >
              {t("input.prefoot.button")}
            </button>
          </div>
        </div>
        {showMessage && (
          <div className="mt-4 font-medium italic confirmation-msg">
            {t("input.prefoot.confirmation")}
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
