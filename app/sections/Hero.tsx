import Image from "next/image";


export default function Hero() {
  return (
   <section className="hero">
  <div className="hero-bg" />
  <div className="hero-ring hero-ring-1" />
  <div className="hero-ring hero-ring-2" />

  <div className="hero-inner">
    <p className="hero-eyebrow">КЕЙТЭРЫНГ І ГАСТРАБОКСЫ</p>

    <div className="hero-logo-wrap">
      <div className="hero-logo-glow" />
      <Image
        src="/logochef.png"
        alt="YumYarosh"
        width={1200}
        height={1200}
        className="hero-logo"
        priority
      />
    </div>

    <p className="hero-subtitle">
      Прафесійны дуэт у свеце кулінарыі. Ствараем вытанчаныя
      фуршэтныя стравы.
    </p>

{/* CONTACT BLOCK */}
<div className="contact-card">
  <a
    href="https://www.instagram.com/yumyarosh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    target="_blank"
    rel="noreferrer"
    className="contact-row contact-link-row"
  >
    <Image
      src="/instagramnew.png"
      alt="Instagram"
      width={20}
      height={20}
      className="contact-icon contact-instagram-icon"
    />
    <span className="contact-link-label">@yumyarosh</span>
  </a>

  <a
    href="https://taplink.cc/yumyarosh"
    target="_blank"
    rel="noreferrer"
    className="contact-row contact-link-row"
  >
    <Image
      src="/taplink.png"
      alt="Menu"
      width={20}
      height={20}
      className="contact-icon contact-menu-icon"
    />
    <span className="contact-link-label">Menu</span>
  </a>

  <div className="contact-row contact-phone-row">
  <Image
    src="/contact.png"
    alt="Phone"
    width={20}
    height={20}
    className="contact-icon contact-phone-icon"
  />
  <span className="contact-phone-text">+375 (29) 387-10-38</span>
</div>

<div className="contact-row contact-phone-row">
  <Image
    src="/contact.png"
    alt="Phone"
    width={20}
    height={20}
    className="contact-icon contact-phone-icon"
  />
  <span className="contact-phone-text">+375 (29) 371-69-52</span>
</div>
<div className="hero-footer">
  <img
    src="/cooking.gif"
    alt="Cooking"
    className="hero-footer-gif"
  />

  <p className="hero-footer-text">
    Вэб-сайт знаходзіцца ў {" "}
    <span className="crossed">гатаванні</span>{" "}
    распрацоўцы...
  </p>
</div>
</div>
    </div>
    </section>
  );
}