import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <main className="p-6">
          Main Content
        </main>
      </div>
    </div>
  );
}

export default Home;