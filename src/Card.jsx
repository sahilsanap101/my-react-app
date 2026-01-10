import profilePic from "./assets/profile.svg";
import "./index.css";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile" className="profile-img" />
      <h2 className="crad-title"> SAHIL SANAP </h2>
      <p className="card-text">I am BTech CSE 3rd Year Student and learning React.js</p>
    </div>
  );
}

export default Card;
