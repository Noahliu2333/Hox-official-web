import "./Card.css";

const Card = (propData) => {
  const classes = "card " + propData.className;
  return <div className={classes}>{propData.children}</div>;
};

export default Card;
