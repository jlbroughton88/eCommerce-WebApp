import React, {useEffect, useState} from "react";
import ProfileEditModal from "../ProfileEditModal/ProfileEditModal";
import ProfileTopSect from "../ProfileTopSect/ProfileTopSect";
import ProfileListings from "../ProfileListings/ProfileListings";
import Loading from "../Loading/Loading";
import { useAuth0 } from "../../contexts/auth0-context";
import "./styles/Profile.scss";

const Profile = () => {
  const { dbUser, user, isLoading } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [loading, dbUser])

  const handleEditModal = e => {
    let modalParent = document.getElementById("modalParent");
    let style = modalParent.style;
    style.display = "inline-block";
  };

  const style1 = {
    display: "none"
  };

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="profileMother">
      <div className="profileMain">
        <ProfileTopSect />
        <hr/>
        <ProfileListings/>
        <button onClick={e => handleEditModal(e)}>Open Modal</button>
        <div style={style1} id="modalParent">
          <ProfileEditModal />
        </div>
      </div>
    </div>
  );
};

export default Profile;
