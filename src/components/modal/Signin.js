import React from "react";
import { Modal } from "react-bootstrap";

export default function Signin({ signInShow, setSignInShow, signInHere }) {
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
        show={signInShow}
        onHide={() => setSignInShow(false)}
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
              className="mb-3 text-center"
            >
              Sign In
            </div>
            {/* {message && message} */}
            <form
            //   onSubmit={(e) => handleSubmit.mutate(e)}
            >
              <div className="mt-3 form">
                <label className="label">Username</label>
                <input
                  type="text"
                  name="username"
                  // value={email}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-3"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="ShowPass"
                  // value={password}
                  // onChange={handleChange}
                  className="px-3 py-2 mb-3"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Show"
                  onClick={ShowPass}
                  className="mt-3"
                />
                <label for="Show" className="ms-1">
                  Show Password
                </label>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btnauth">
                  Sign In
                </button>
                <p className="warning">
                  Don't have an account?
                  <button onClick={signInHere} className="btnHere">
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
