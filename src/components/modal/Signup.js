import React from "react";
import { Modal } from "react-bootstrap";

export default function Signup({ signUpShow, setSignUpShow, signUpHere }) {
  function ShowPass() {
    let x = document.getElementById("ShowPass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  return (
    <div>
      <Modal
        size="md"
        show={signUpShow}
        onHide={() => setSignUpShow(false)}
        centered
      >
        <Modal.Body className="bg-Modal">
          <div>
            <div
              style={{
                fontSize: "30px",
                lineHeight: "49px",
                fontWeight: "700",
                color: "black",
              }}
              className="mb-2 text-center"
            >
              Sign Up
            </div>
            {/* {message && message} */}
            <form
            // onSubmit={(e) => handleSubmit.mutate(e)}
            >
              <div className="mt-3 form">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  // value={fullName}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                />
                <label className="label">Username</label>
                <input
                  type="text"
                  name="username"
                  // value={fullName}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  // value={email}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="ShowPass"
                  // value={password}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                />
                <label className="label">List As</label>
                <select
                  name="status"
                  // value={gender}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
                <label className="label">Gender</label>
                <select
                  name="gender"
                  // value={gender}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <label className="label">Phone</label>
                <input
                  type="number"
                  name="phone"
                  // value={phone}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                />
                <label className="label">Address</label>
                <input
                  type="text"
                  name="address"
                  // value={address}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-2"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Show"
                  onClick={ShowPass}
                  className="mb-2"
                />
                <label for="Show" className="ms-1">
                  Show Password
                </label>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btnauth">Sign Up</button>
                <p className="warning">
                  Already have an account?
                  <button onClick={signUpHere} className="btnHere">
                    Click here
                  </button>
                </p>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
