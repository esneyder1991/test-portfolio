import React from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const reset = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <section
      className="bg-indigo-900/60 text-white m-3 rounded-2xl max-w-[700px] mx-auto md:grid  md:px-14 z-20 relative"
      id="contact"
    >
      <div className="grid place-content-center ">
        <h2 className="py-2 px-10 font-extrabold text-white text-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-lg mb-10 mx-2 mt-4">
          CONTACT-ME
        </h2>
      </div>
      <article className="py-6 px-5 ">
        <h3 className="font-bold text-2xl mb-4">Get in touch</h3>
        <p className="mb-10">
          I’m very approachable and would love to speak to you. Feel free send
          me an email . Follow me in social media or simply complete the enquiry
          form
        </p>

        <div className="flex justify-start items-center gap-2">
          <div className="bg-indigo-600 inline-block p-2 rounded-full text-2xl">
            <i className="bx bx-envelope"></i>
          </div>
          <span className="text-sm">miranda-x91@hotmail.com</span>
        </div>
      </article>

      <form onSubmit={handleSubmit} className="grid gap-4 p-4 rounded-md">
        <h2 className="font-bold text-2xl">Send me a message</h2>
        <input
          className="bg-indigo-500 rounded-md p-2 px-6 outline-none"
          placeholder="Name*"
          type="text"
          name="from_name"
          required
        />
        <input
          className="bg-indigo-500 rounded-md p-2 px-6 outline-none"
          placeholder="Email Adress*"
          type="email"
          name="email"
          required
        />

        <textarea
          className="bg-indigo-500 rounded-md px-6 py-2 outline-none backdrop-filter backdrop-blur-md"
          placeholder="Your message*"
          id=""
          cols="20"
          rows="10"
          name="message"
          required
        ></textarea>

        <div>
          <button className="flex  border-[1px] py-2 px-6 rounded-lg bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 mb-8">
            Send message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
