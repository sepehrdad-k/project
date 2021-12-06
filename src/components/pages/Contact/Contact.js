import React, { useContext, useState, useEffect } from "react";
import { Appcontext } from "../../App";
const Contact = React.memo(() => {
  useEffect(() => {
    return () => {
      clearTimeout(resetId);
    };
  }, []);
  const { setPointer } = useContext(Appcontext);
  const [Success, setSuccess] = useState(false);
  const [Message, setMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    adress: "",
    message: "",
  });
  let resetId = null;
  const formhandler = (e) => {
    e.preventDefault();
    setSuccess(true);
    resetId = setTimeout(() => {
      setSuccess(false);
    }, 4000);
    console.log(resetId);
    console.log(Message);
    setMessage({
      firstname: "",
      lastname: "",
      email: "",
      adress: "",
      message: "",
    });
  };
  return (
    <>
      <main className="contact">
        <div className={Success ? "success-message show" : "success-message"}>
          your message was successfully sent!
        </div>
        <form
          onMouseEnter={() => setPointer(true)}
          onMouseLeave={() => setPointer(false)}
          onSubmit={formhandler}
          className="form"
        >
          <div className="firstname">
            <label htmlFor="firstname-input" className="firstneme-label">
              Firstname
            </label>
            <br />
            <input
              type="text"
              name="firstname-input"
              className="firstname-input"
              placeholder="Sepehrdad"
              value={Message.firstname}
              onChange={(e) =>
                setMessage({ ...Message, firstname: e.target.value })
              }
            />
          </div>
          <div className="lastname">
            <label htmlFor="lastname-input" className="lastname-label">
              Lastname
            </label>
            <br />
            <input
              type="text"
              name="lastname-input"
              className="lastname-input"
              placeholder="Kashiri"
              value={Message.lastname}
              onChange={(e) =>
                setMessage({ ...Message, lastname: e.target.value })
              }
            />
          </div>
          <div className="email">
            <label htmlFor="email-input" className="email-label">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email-input"
              className="email-input"
              placeholder="sepehrdad-k@example.com"
              value={Message.email}
              onChange={(e) =>
                setMessage({ ...Message, email: e.target.value })
              }
            />
          </div>
          <div className="adress">
            <label htmlFor="adress-input" className="adress-label">
              Adress
            </label>
            <br />
            <input
              type="text"
              name="adress-input"
              className="adress-input"
              placeholder="Tehran"
              value={Message.adress}
              onChange={(e) =>
                setMessage({ ...Message, adress: e.target.value })
              }
            />
          </div>
          <div className="message">
            <label htmlFor="message-input" className="message-label">
              What do you need?
            </label>
            <br />
            <textarea
              name="message-input"
              className="message-input"
              placeholder="I need a website..."
              value={Message.message}
              onChange={(e) =>
                setMessage({ ...Message, message: e.target.value })
              }
            ></textarea>
          </div>
          <button onClick={formhandler} className="form-button" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
});

export default Contact;
