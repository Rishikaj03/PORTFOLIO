import "./Contact.css";

function Contact() {

  return (

    <section className="contact" id="contact">

      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        Have a project, opportunity, or just want to say hello?
        Feel free to reach out.
      </p>


      <div className="contact-container">


        <div className="contact-card">

          <h3>Email</h3>
          <p>
            rishika@example.com
          </p>

        </div>


        <div className="contact-card">

          <h3>LinkedIn</h3>

          <a href="#">
            linkedin.com/in/rishika
          </a>

        </div>


        <div className="contact-card">

          <h3>GitHub</h3>

          <a href="#">
            github.com/Rishikaj03
          </a>

        </div>


      </div>


      <button className="contact-btn">
        Download Resume
      </button>


    </section>

  );

}

export default Contact;