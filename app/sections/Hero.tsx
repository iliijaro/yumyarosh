import Image from "next/image";


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-ring hero-ring-1" />
      <div className="hero-ring hero-ring-2" />

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
  className="contact-item contact-instagram"
>
  <Image
    src="/instagramnew.png"
    alt="Instagram"
    width={20}
    height={20}
    className="insta-icon"
  />
  <span>@yumyarosh</span>
</a>

        <div className="contact-item">
          +375 (29) 387-10-38
        </div>

        <div className="contact-item">
          +375 (29) 371-69-52
        </div>
      </div>
    </section>
  );
}