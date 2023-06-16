import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>         {/* For a class with a dash in it a dot notation cannot be used */}
                <img src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/12/27092019/indian-cuisine_63a94498281e7.jpg" alt="A table full of delicious food!" />
            </div>
        </Fragment>
    );
};

export default Header;