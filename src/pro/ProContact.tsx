import { portfolioConfig } from "../config/portfolio.config";

function ProContact() {
  const { email, phone, name } = portfolioConfig.personal;
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(
    `Let's talk — opportunity for ${name}`,
  )}&body=${encodeURIComponent(
    "Hi,\n\nI came across your portfolio and would like to discuss an opportunity.\n\n",
  )}`;

  return (
    <section id="contact" className="pro-contact">
      <span className="pro-section-eyebrow">Get in touch</span>
      <h2>
        Have something worth
        <br />
        building? Let's talk.
      </h2>
      <p>One email is all it takes — I usually reply within a day.</p>

      <a className="pro-btn pro-btn--primary pro-btn--big" href={mailtoHref}>
        Email {name.split(" ")[0]} ↗
      </a>

      <div className="pro-contact-alt">
        <span>{email}</span>
        {phone && <span>{phone}</span>}
        {portfolioConfig.social.linkedin && (
          <a
            href={portfolioConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}

export default ProContact;
