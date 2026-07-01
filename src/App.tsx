import { lazy, Suspense } from "react";
import Landing from "./pages/Landing";
import SteamPortfolio from "./pages/SteamPortfolio";

const ProfessionalPortfolio = lazy(() => import("./pro/ProfessionalPortfolio"));
const SignOutSatire = lazy(() => import("./components/SignOutSatire"));

function App() {
  const path = window.location.pathname;

  if (path === "/satire-signout") {
    return (
      <Suspense fallback={null}>
        <SignOutSatire />
      </Suspense>
    );
  }

  if (path === "/pro") {
    return (
      <Suspense fallback={null}>
        <ProfessionalPortfolio />
      </Suspense>
    );
  }

  if (path === "/steam") {
    return <SteamPortfolio />;
  }

  return <Landing />;
}

export default App;
