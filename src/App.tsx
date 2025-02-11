import Dashboard from "./features/dashboard/Dashboard";
import NavBar from "./features/navigation/NavBar";

const App = () => {
  return (
    <div
      className="min-h-[100vh] bg-[#191D29] bg-cover bg-fixed bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <NavBar />
      <main className="px-10 py-5 pt-[100px] md:px-20 md:py-10 md:pt-[100px] [&_*]:box-border">
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
