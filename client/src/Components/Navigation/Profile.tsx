import { Fragment } from "react";
import LoginButton from "../Button/LoginButton";
import LogoutButton from "../Button/LogoutButton";

const Profile = () => {
  return window.localStorage.length === 0 ? (
    <Fragment>
      <div>
        <LoginButton />
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div>
        <LogoutButton />
      </div>
    </Fragment>
  );
};

export default Profile;
