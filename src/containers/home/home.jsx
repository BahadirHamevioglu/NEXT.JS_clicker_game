import Wallet from "./components/wallet";
import Clicker from "./components/clicker";
import Dashboard from "./components/dashboard";

function HomePageContainer() {
  return (
    <main style={{ width: "100%", height: "100%" }}>
      <Wallet />
      <Clicker />
      <Dashboard />
    </main>
  );
}

export default HomePageContainer;
