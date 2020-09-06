import React from "react";
import { Link, useParams } from "react-router-dom";
import ax from "axios";

const ActivateAccount = props => {
  const [isActivated, setIsActivated] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const { uId, token } = useParams();
  const activateAccount = () => {
    console.log({ uId, token });
    ax.get(
      `http://127.0.0.1:8000/api/accounts/v1/user/activate/${uId}/${token}`
      // { headers: { Authorization: `Token ${token}` } }
    )
      .then(res => {
        console.log(res.message);
        if (res.status === 200) {
          setIsActivated(true);
        }
      })
      .then(err => {
        console.log({ err });
      });
  };
  return (
    <div className="container mt-5">
      <h1 className="display-4">Activate your account.</h1>
      <p>Please click on the button below to activate your account.</p>
      <div>
        <h6 className="text-danger">{errorMessage ? errorMessage : null}</h6>
      </div>
      {isActivated ? (
        <h6 className="text-success">
          Account activated. Please Proceed to login.
        </h6>
      ) : null}

      <button
        onClick={() => {
          activateAccount();
          setIsDisabled(true);
        }}
        disabled={isDisabled}
        className={`btn btn-primary btn-lg ${isActivated ? "disabled" : null}`}>
        Activate
      </button>
      {isActivated ? (
        <Link className="btn btn-primary btn-lg" to="/login">
          Login
        </Link>
      ) : null}
    </div>
  );
};

export default ActivateAccount;
