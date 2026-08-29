import FadeAnimation from "../../components/ui/FadeAnimation";
import { Link } from "react-router-dom";

const Final = () => {
  return (
    <section className="cta-final">
      <div className="container">
        <FadeAnimation as="h2" className="section__title ">
          جاهزون نوثّق مناسبتكم القادمة؟
        </FadeAnimation>
        <FadeAnimation as="p" opacity="0.75" className="section__text ">
          احجزوا موعدكم خلال دقيقة، ونرسل لكم التأكيد مباشرة على واتساب.
        </FadeAnimation>
        <FadeAnimation className="cta-final__row ">
          <Link to="/booking" data-page="booking" className="btn btn--primary">
            احجزي موعدك الآن
          </Link>
        </FadeAnimation>
      </div>
    </section>
  );
};
export default Final;
