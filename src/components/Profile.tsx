import ProfilePicture from "./ProfilePicture";

type ProfileProps = {
  user: any;
  uid: string | null;
};

const Profile: React.FC<ProfileProps> = ({ user, uid }) => {
  const getAge = (dateString: string) => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };
  return (
    <div className="main-container">
      {user ? (
        <>
          <h1 className="text-4xl font-bold m-2">{user.displayName}</h1>
          {user?.profilePicture ? (
            <img
              className="avatar rounded-full h-32 w-32"
              src={user?.profilePicture}
              alt={user.displayName}
            />
          ) : (
            <label htmlFor="profile-picture">
              <div
                className="avatar placeholder tooltip m-5"
                data-tip="Upload a profile picture"
              >
                <div className="bg-neutral h-32 w-32 rounded-full">
                  <span className="text-6xl text-neutral-content">+</span>
                </div>
              </div>
            </label>
          )}
          <div className="flex">
            <div className="badge badge-primary m-2">
              {getAge(user.birthdate)} years old
            </div>
            <div className="badge badge-secondary m-2">{user.gender}</div>
            <div className="badge badge-success m-2">{user.orientation}</div>
            <div className="badge badge-warning m-2">{user.status}</div>
          </div>
          <h2 className="text-2xl font-bold m-2">About me</h2>
          <p className="text-xl m-2">{user.bio}</p>
          <ProfilePicture uid={uid} />
        </>
      ) : (
        <>
          <div className="loading loading-infinity"></div>
        </>
      )}
    </div>
  );
};

export default Profile;
