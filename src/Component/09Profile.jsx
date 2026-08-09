import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h2>Hello, {user}</h2>

      <button onClick={() => setUser("Ahmed")}>
        Change User
      </button>
    </div>
  );
}

export default Profile;