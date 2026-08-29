import FadeAnimation from "../components/ui/FadeAnimation";
import { Link } from "react-router-dom";

const newsData = [
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=82",
    date: "أغسطس 2026",
    title: "افتتاح خط تصوير جديد للمناسبات الخارجية",
    description: "أضفنا فريقاً متخصصاً بالجلسات الخارجية والطبيعية، ليواكب طلب عملائنا على جلسات خارج الاستديو.",
  },
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=82",
    date: "يونيو 2026",
    title: "باقة موسم التخرج متاحة الآن",
    description: "باقات مخصصة لمواسم التخرج مع خصم للحجز الجماعي، وتسليم خلال 48 ساعة.",
  },
  {
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=82",
    date: "مارس 2026",
    title: "تحديث الاستديو بإضاءة وخلفيات جديدة",
    description: "جددنا مساحة الاستديو الداخلية بمعدات إضاءة احترافية وخلفيات إضافية لجلسات البورتريه.",
  },
  {
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=82",
    date: "يناير 2026",
    title: "الحجز الفوري عبر واتساب أصبح متاحاً",
    description: "أصبح بإمكانكم الآن حجز موعدكم مباشرة من موقعنا، مع إرسال تفاصيل الحجز مباشرة إلى واتساب الاستديو.",
  },
];

const News = () => {
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
            {newsData.map((item, index) => (
              <FadeAnimation key={index} className="news-item">
                <div className="news-item__media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span className="news-item__date">{item.date}</span>
                </div>
                <div>
                  <h3 className="news-item__title">{item.title}</h3>
                  <p className="news-item__text">{item.description}</p>
                </div>
              </FadeAnimation>
            ))}
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
