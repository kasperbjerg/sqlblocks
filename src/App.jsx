import logo from "/logo.svg";
import BlocklyApp from "./BlocklyApp.jsx";

function App() {
  return (
    <>
      <header className="sans-serif min-h-16 bg-gray-200 text-3xl  text-white">
        <img src={logo} className="relative left-8" alt="React logo" />
      </header>
      <div className="relative top-4 grid grid-cols-5 gap-4">
        <div className="min-w-120 col-span-1 indent-8 text-2xl font-semibold">
          Menu
        </div>
        <div className="col-span-4">
          <p className="text-2xl">Opgavebeskrivelser</p>
          <p className="text-1xl">Her kan der stå opgaver</p>
          <BlocklyApp />
        </div>
      </div>
    </>
  );
}

export default App;
