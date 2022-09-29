import React, { useContext, useState } from "react";
// import { UserContext } from "../../context/userContext";
import patient from "../../assets/dropdown/patient.png";
import doctor from "../../assets/dropdown/doctor.png";
import name from "../../assets/profile/name.png";
import address from "../../assets/profile/address.png";
import email from "../../assets/profile/email.png";
import gender from "../../assets/profile/gender.png";
import phone from "../../assets/profile/phone.png";
import status from "../../assets/profile/status.png";

export default function Profile() {
  const title = "Profile";
  document.title = "Halo Corona | " + title;
  return (
    <div className="profile-container">
      <div className="profile-card shadow">
        <div className="profile-desc">
          <div className="profile-data">
            <h2>Personal Info</h2>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={name} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Aditya
              </span>
              <span>Fullname</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={email} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                aditya@mail.com
              </span>
              <span>Email</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={status} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                Patient
              </span>
              <span>Status</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={gender} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>Male</span>
              <span>Gender</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={phone} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                6281939283283
              </span>
              <span>Mobile Phone</span>
            </div>
          </div>
          <div className="profile-data">
            <div className="profile-icon">
              <img src={address} alt="" />
            </div>
            <div className="profile-details">
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                JL. Peta No. 163/95 Kota Bandung
              </span>
              <span>Address</span>
            </div>
          </div>
        </div>
        <div className="profile-img">
          <img src={patient} alt="avatar" className="profile-avatar" />
          <button className="profile-button">Change Photo Profile</button>
        </div>
      </div>
    </div>
  );
}
