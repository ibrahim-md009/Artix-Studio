import { useState } from "react";
import FadeAnimation from "../components/ui/FadeAnimation";

const categories = [
  { id: "wedding", label: "أعراس" },
  { id: "engagement", label: "خطوبة" },
  { id: "graduation", label: "تخرج" },
  { id: "family", label: "عائلية" },
  { id: "portrait", label: "بورتريه" },
];

const GALLERY_ITEMS = [
  // أعراس
  {
    category: "wedding",
    title: "حفل زفاف — سلمى وأحمد",
    sub: "Artix Studio، 2026",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=88",
  },
  {
    category: "wedding",
    title: "حفل زفاف — نور وياسين",
    sub: "قاعة الزيتونة",
    img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=88",
  },
  { category: "wedding", title: "زفة العروسين", sub: "جلسة مسائية", img: "" },
  {
    category: "wedding",
    title: "لحظة تبادل الخواتم",
    sub: "تصوير حي",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=88",
  },

  // خطوبة
  { category: "engagement", title: "جلسة خطوبة — لين وكريم", sub: "جلسة خارجية", img: "" },
  { category: "engagement", title: "جلسة خطوبة — هبة ووسيم", sub: "حديقة زيتون", img: "" },
  { category: "engagement", title: "تبادل الدبل", sub: "لقطة مقرّبة", img: "" },

  // تخرج
  { category: "graduation", title: "حفل تخرج — دفعة 2026", sub: "جامعة بيرزيت", img: "" },
  { category: "graduation", title: "جلسة تخرج فردية", sub: "داخل الحرم الجامعي", img: "" },
  { category: "graduation", title: "جلسة تخرج جماعية", sub: "مع صديقات الدفعة", img: "" },
  {
    category: "graduation",
    title: "لحظة رمي القبعة",
    sub: "تصوير حركي",
    img: "https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=1100&q=88",
  },

  // عائلية
  { category: "family", title: "جلسة عائلية — عائلة النجار", sub: "داخل الاستديو", img: "" },
  { category: "family", title: "جلسة عائلية — عائلة خليل", sub: "جلسة خارجية", img: "" },
  { category: "family", title: "جلسة إخوة", sub: "إضاءة طبيعية", img: "" },

  // بورتريه
  { category: "portrait", title: "بورتريه شخصي — رزان", sub: "إضاءة استديو", img: "" },
  { category: "portrait", title: "بورتريه تجاري", sub: "هوية شخصية", img: "" },
  { category: "portrait", title: "جلسة بورتريه فني", sub: "إضاءة درامية", img: "" },
  { category: "portrait", title: "بورتريه بالأبيض والأسود", sub: "كلاسيكي", img: "" },
];

const Works = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [lightboxIndex, setLightboxIndex] = useState(null); // null = مقفول
  const filteredItems = GALLERY_ITEMS.filter((i) => i.category === activeTab);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };
  const goPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section>
      <div className="page-header">
        <span className="page-header__eyebrow">معرض الأعمال</span>
        <h1 className="page-header__title">لحظات وثّقناها بعناية</h1>
        <p className="page-header__text">تصفّحي الصور بالأسفل وتقلّبي بينها بالسهمين، أو اختاري تصنيفاً آخر بأي وقت.</p>
      </div>

      <section className="section section--tight">
        <div className="container">
          <FadeAnimation className="filter-bar" id="filter-bar">
            {categories.map((item) => (
              <button
                className={`filter-btn ${activeTab === item.id ? "is-active" : ""}`}
                key={item.id}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </FadeAnimation>
          ;
          <p className="filter-hint" id="filter-hint">
            اختاري تصنيفاً من فوق لعرض صوره
          </p>
          <FadeAnimation key={activeTab} once={false} className="gallery-grid" id="gallery-grid" aria-live="polite">
            {filteredItems.map((item, index) => (
              <article
                className="gallery-card"
                key={index}
                tabIndex={0}
                role="button"
                aria-label={`فتح ${item.title}`}
                onClick={() => openLightbox(index)}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <span className="gallery-card__index">
                  {index + 1}/{filteredItems.length}
                </span>
                <div className="gallery-card__info">
                  <b>{item.title}</b>
                  <span>{item.sub}</span>
                </div>
              </article>
            ))}
          </FadeAnimation>
        </div>
      </section>

      <div
        id="lightbox"
        className={`lightbox ${lightboxIndex !== null ? "is-active" : ""}`}
        aria-hidden={lightboxIndex === null}
        onClick={(e) => {
          if (e.target.currentTarget === e.target) closeLightbox();
        }}
      >
        <button className="lightbox__close" id="lightbox-close" onClick={closeLightbox} aria-label="إغلاق">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <button
          className="lightbox__arrow lightbox__arrow--next"
          id="lightbox-next"
          onClick={goNext}
          aria-label="الصورة التالية"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div
          className="lightbox__image"
          id="lightbox-image"
          style={{
            backgroundImage: lightboxIndex !== null ? `url('${filteredItems[lightboxIndex].img}')` : "none",
          }}
        />

        <button
          className="lightbox__arrow lightbox__arrow--prev"
          id="lightbox-prev"
          onClick={goPrev}
          aria-label="الصورة السابقة"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <section className="cta-final">
        <div className="container">
          <FadeAnimation className="section__title ">أعجبتكم أعمالنا؟</FadeAnimation>
          <FadeAnimation className="section__text ">احجزوا جلستكم الآن ولنصنع سوياً لحظة تستحق التوثيق.</FadeAnimation>
          <FadeAnimation className="cta-final__row ">
            <a href="#" data-page="booking" className="btn btn--primary">
              احجزي موعدك الآن
            </a>
          </FadeAnimation>
        </div>
      </section>
    </section>
  );
};
export default Works;
