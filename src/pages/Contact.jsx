import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <h2>Contact Us</h2>
      <p className="Email">Email: example@email.com</p>
      <p className="Phone">Phone: 555-555-5555</p>


      <h2>Shop Hours</h2>
    
      <p>Monday - Friday: 09:00 - 19:00 (without lunch)
        <br></br>
Saturday: 09:00 - 18:00 (without lunch)
<br></br>
Sunday: 10:00 - 17:00 (no lunch, delivery only, no pickup)
<br></br>

Wednesday: 15:00 - 16:30 - technical break
<br></br>
Holidays and weekends: 10:00 - 17:00 (without lunch)</p>
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.8801415328417!2d78.3644249753723!3d42.494100726623856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38865c10b623cf03%3A0x919d09cccc70a849!2z0YPQu9C40YbQsCDQnNCw0YHQsNC90YfQuCwg0JrQsNGA0LDQutC-0Ls!5e0!3m2!1sru!2skg!4v1684472444973!5m2!1sru!2skg"
        width="100%"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google maps"
      ></iframe>
    </div>
  );
};

export default Contact;