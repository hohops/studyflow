import index from "./Index.html";
import styles from "./Styles.css";

const GSB = document.getElementById("icon");

GSB.addEventListener("click", () => {
    // This properly replaces the current item in the browser history
    window.location.replace("SignUp.html");
});