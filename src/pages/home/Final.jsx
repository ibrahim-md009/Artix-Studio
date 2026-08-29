import FadeAnimation from "../../components/ui/FadeAnimation";

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
          <a href="#" data-page="booking" className="btn btn--primary">
            احجزي موعدك الآن
          </a>
        </FadeAnimation>
      </div>
    </section>
  );
};
export default Final;
