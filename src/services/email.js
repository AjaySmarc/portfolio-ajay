import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        user_name: formData.user_name || 'Anonymous',
        user_email: formData.user_email,
        user_subject: formData.user_subject,
        user_message: formData.user_message,
        email: formData.user_email, // because template expects it
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    return {
      ok: true,
      message: 'Thanks for visiting! Your message has been sent.',
      status: response.status,
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      ok: false,
      message: 'Unable to send your message. Please try again.',
    };
  }
};
