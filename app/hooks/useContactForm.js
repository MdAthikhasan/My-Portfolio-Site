import { useState } from 'react';
import { sendEmail } from '../lib/emailjs';

export const useContactForm = (formRef) => {
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const success = await sendEmail(formRef.current);
      if (success) {
        setStatus({ loading: false, success: true, error: false });
        formRef.current.reset();
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return { status, handleSubmit };
}; 