import "./About.css";
import video from "../assets/video.mp4"

export default function About() {
  return (
    <div className="About">
      <h2>About Us</h2>
      <video className="video" controls autoPlay loop>
        <source 
        src={video} type="video/mp4" />
      
      </video>
      <p>
        We are an online store that specializes in selling smartphones and
        accessories. Here you can find everything you need to accessorize your
        phone, including phone cases, headphones, power banks, and more.
      </p>
      <p>
        Our mission is to provide our customers with high-quality products at
        affordable prices. We believe that everyone should have access to the
        latest technology without breaking the bank.
      </p>
      <p>
        If you have any questions or concerns, please feel free to reach out to
        us. Our customer support team is available 24/7 to assist you with your
        needs.
      </p>
    </div>
  );
}