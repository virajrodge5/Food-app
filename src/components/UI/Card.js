import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={classes.card}>{props.children}</div> 
    );
};              //props.children is used so that whatever is passed b/w the opening and closing tag of Card component is in the end used inside of card

export default Card;