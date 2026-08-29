import { useState, useEffect } from "react";
import FadeAnimation from "../components/ui/FadeAnimation";
import { Link } from "react-router-dom";
import { getNews } from "../services/firestore";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const news = await getNews();
        setNewsData(news);
      } catch (err) {
        console.error("فشل تحميل الأخبار:", err);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <section id="page-news">
      <div className="page-header">
        <span className="page-header__eyebrow">آخر الأخبار</span>
        <h1 className="page-header__title">مستجدات الاستديو</h1>
        <p className="page-header__text">كل جديد عن باقاتنا ومعداتنا ومساحة الاستديو، بمكان واحد.</p>
      </div>

      <section className="section section--tight news-section-tight">
        <div className="container">
          <div className="news-list">
            {loading ? (
              <p className="empty-msg">جاري تحميل الأخبار...</p>
            ) : (
              newsData.map((item) => (
                <FadeAnimation key={item.id} className="news-item">
                  <div className="news-item__media">
                    <img src={item.imageUrl} alt={item.mainDesc} loading="lazy" />
                    {item.createdAt && (
                      <span className="news-item__date">
                        {item.createdAt.toDate().toLocaleDateString("ar-EG", { year: "numeric", month: "long" })}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="news-item__title">{item.mainDesc || "(بدون عنوان)"}</h3>
                    <p className="news-item__text">{item.subDesc}</p>
                  </div>
                </FadeAnimation>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <FadeAnimation>
            <h2 className="section__title">حابين تكونوا جزءً من قصتنا؟</h2>
          </FadeAnimation>

          <FadeAnimation>
            <p className="section__text section__text--muted">
              احجزوا جلستكم اليوم وتابعوا أخبارنا لأحدث الباقات والعروض.
            </p>
          </FadeAnimation>

          <FadeAnimation className="cta-final__row">
            <Link to="/booking" className="btn btn--primary">
              احجزي موعدك الآن
            </Link>
          </FadeAnimation>
        </div>
      </section>
    </section>
  );
};

export default News;
