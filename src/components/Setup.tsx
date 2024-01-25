import SetupOne from "./SetupOne";
import SetupTwo from "./SetupTwo";

const Setup = () => {
  return (
    <div className="main-container">
      <h1 className="text-3xl font-bold mb-6">
        First, we need some info about you!
      </h1>
      <div className="carousel w-full">
        <SetupOne />
        <SetupTwo />
      </div>
    </div>
  );
};

export default Setup;
