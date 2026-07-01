import ProHeader from "./ProHeader";
import ProAbout from "./ProAbout";
import ProProjects from "./ProProjects";
import ProContact from "./ProContact";
import "./professional.css";

function ProfessionalPortfolio() {
  return (
    <div className="pro">
      <ProHeader />
      <main className="pro-main">
        <ProAbout />
        <ProProjects />
        <ProContact />
      </main>
      <footer className="pro-footer">
        <a href="/">← Back to version chooser</a>
      </footer>
    </div>
  );
}

export default ProfessionalPortfolio;
