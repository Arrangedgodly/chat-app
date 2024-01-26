type ProfileProps = {
  user: any;
};

const Profile: React.FC<ProfileProps> = ({ user }) => {
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
          {user?.profilePicture && (
            <img
              className="rounded-full h-32 w-32"
              src={user?.profilePicture}
              alt={user.displayName}
            />
          )}
          <p className="text-2xl m-2">
            {getAge(user.birthdate)} year old - {user.gender}
          </p>
          <p className="text-2xl">
            {user.orientation} - {user.status}
          </p>
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
