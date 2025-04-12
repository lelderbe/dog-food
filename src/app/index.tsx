import s from "./styles.module.css";
import logo from "./assets/react.svg";

const user: User = { name: "Dima" };

export function App() {
    return (
        <>
            <p className={s.text}>Hello</p>
            <img src={logo} alt="" />
        </>
    );
}
