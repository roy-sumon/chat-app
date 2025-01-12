
import MainPage from "./pages/MainPage";
import SettingsBar from "./components/SettingsBar";
import Login from "./pages/Login";

function App() {
  return (
    <>
    {/* <Login /> */}
      <div className="flex w-full h-screen ">
        <div className="w-[10%] sm:w-[4%] bg-custom_bg_one text-white">
          <SettingsBar />
        </div>
        <div className="w-[96%] bg-custom_bg_two text-white">
          <MainPage />
        </div>
      </div>
    </>
  );
}

export default App;
