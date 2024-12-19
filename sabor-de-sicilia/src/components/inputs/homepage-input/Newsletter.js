import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./newsletter.css"

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { t } = useTranslation();

  const handleEmailChange = (e) => {
    if (isSubmitted) return; // Prevent changes after submission
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = (value) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const isValid = emailRegex.test(value);
    setIsValid(isValid);
  };

  const handleBlur = () => {
    if (!isSubmitted) {
      setIsTouched(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && !isSubmitted) {
      setShowMessage(true);
      setIsSubmitted(true);
      setIsTouched(false); // Reset touched state
      const successMessage = document.getElementById('success-message');
      if (successMessage) {
        successMessage.focus();
      }
    }
  };

  const showError = !isSubmitted && isTouched && email && !isValid;

  return (
    <div className="prefoot-input mt-10 md:m-0 flex justify-center items-center">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md"
        aria-label={t("aria-labels.prefoot-form.form-description")}
      >
        <div className="mb-4">
          <label 
            className="block text-base font-bold mb-2 cursor-pointer" 
            htmlFor="newsletter-email"
          >
            {t("input.prefoot.label")}
          </label>
          <div className="flex" role="group" aria-labelledby="newsletter-email">
            <input
              className={`appearance-none border w-full py-2 px-3 leading-tight ${
                isValid ? 'valid' : ''
              }`}
              id="newsletter-email"
              type="email"
              name="email"
              placeholder={t("input.prefoot.placeholder")}
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              aria-invalid={showError}
              aria-describedby={showError ? "email-error" : undefined}
              required
              disabled={isSubmitted}
              readOnly={isSubmitted}
            />
            <button
              className={`py-2 px-3 ${
                isValid && !isSubmitted ? "opacity-100" : "opacity-50 cursor-not-allowed"
              }`}
              type="submit"
              disabled={!isValid || isSubmitted}
              aria-label={t("aria-labels.prefoot-form.submit-button")}
            >
              {isSubmitted 
                ? t("input.prefoot.submitted") 
                : t("input.prefoot.button")}
            </button>
          </div>
          {showError && (
            <div 
              id="email-error" 
              className="mt-2 text-sm" 
              role="alert"
            >
              {t("input.prefoot.error")}
            </div>
          )}
        </div>
        {showMessage && (
          <div 
            id="success-message"
            className="mt-4 font-medium italic confirmation-msg"
            role="alert"
            tabIndex="-1"
          >
            {t("input.prefoot.confirmation")}
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter;