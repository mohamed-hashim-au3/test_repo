import classNames from "classnames";
import Link from "next/link";

const SimpleSlideCard = ({
  children,
  icon,
  title,
  backgroundColor,
  cardClass,
  link
}) => {
  return (
    <div className="c-simple-slide-card p-2 m-3">
      <Link href={link}>
        <a className="c-simple-slide-card__overlay-link"></a>
      </Link>
      <div
        style={{ backgroundColor }}
        className={classNames("c-simple-slide-card__inner", {
          [cardClass]: cardClass
        })}
      >
        <div className="c-simple-slide-card__icon">{icon}</div>
        <h5 className="c-simple-slide-card__title pt-3">{title}</h5>
        {children}
      </div>
    </div>
  );
};
SimpleSlideCard.defaultProps = {
  backgroundColor: "transparent"
};
export default SimpleSlideCard;
