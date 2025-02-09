import LandingPage from "./features/landing/LandingPage";
import NavBar from "./features/navigation/NavBar";

const App = () => {
  return (
    <div
      className="min-h-[100vh] bg-[#191D29] bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <NavBar />
      <main className="px-10 md:px-20 [&_*]:box-border">
        <LandingPage />
      </main>
    </div>
  );
};

export default App;
