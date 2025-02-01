import React from "react";
import "./profile-list.css";
const users = [
  { id: 1, name: "Srikanth Sunkari", role: "Software Developer", mobile: 990830053, image: "" },
  { id: 1, name: "Gouthami", role: "Software Developer",mobile: 990830023, image: "" },
  { id: 1, name: "Hanvika Snkari",role: "Doctor", mobile: 9522516643, image: "" },
  { id: 1, name: "Shravan Snkari",role: "Software Developer", mobile: 950830023, image: "" },
  { id: 1, name: "Krupal",role: "Govt Employee", mobile: 990830023, image: "" },
  { id: 1, name: "Vamshi",role: "MLA", mobile: 990830023, image: "" },
  { id: 1, name: "Sai Kumar",role: "Businessman", mobile: 990830023, image: "" },
  { id: 1, name: "Bablu",role: "Army Officer", mobile: 990830023, image: "" },
];
function ProfileCard() {
  return (
    <>
      <div className="profile-list-container">
        {users.map((user) => (
          <div className="profile-item-details">
            <div className="left-pane">
              <h6 className="label">Name</h6>
              <span classname="value-class">Srikanth Sunkari</span>
              <h6 className="label">Role</h6>
              <span classname="value-class">Software Developer</span>
              <h6 className="label">Phone</h6>
              <span classname="value-class">9908540012</span>
            </div>
            <div className="right-pane">
              <img
                src="https://images.indianexpress.com/2024/10/Happy-Birthday-Prabhas.jpg?w=640"
                className="profile"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProfileCard;
