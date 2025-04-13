import logo from "./assets/logo.png";
import s from "./styles.module.css";

export function Logo() {
    return <img className={s.logo} src={logo} alt="DogFood" />;
}
