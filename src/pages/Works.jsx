import { useState, useEffect } from "react";
import FadeAnimation from "../components/ui/FadeAnimation";
import { getWorks, getCategories } from "../services/firestore";
import { Link } from "react-router-dom";

const Works = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const [works, categoriesData] = await Promise.all([getWorks(), getCategories()]);

        setGalleryItems(works);
        setCategories(categoriesData);
        if (categoriesData.length > 0) {
          setActiveTab((prev) => prev ?? categoriesData[0].id);
        }
      } catch (err) {
        console.error("فشل تحميل الأعمال أو التصنيفات:", err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const filteredItems = galleryItems.filter((i) => i.category === activeTab);

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
          {loading ? (
            <p className="empty-msg">جاري تحميل الأعمال...</p>
          ) : (
            <>
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
            </>
          )}
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
            <Link to="/booking" data-page="booking" className="btn btn--primary">
              احجزي موعدك الآن
            </Link>
          </FadeAnimation>
        </div>
      </section>
    </section>
  );
};
export default Works;
