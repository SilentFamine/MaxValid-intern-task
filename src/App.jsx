
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
  <div className="flex">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold">
          Main Content
        </h1>
      </div>
    </div>
  );
}

export default App;