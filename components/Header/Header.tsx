"use client";
import HeaderProps from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import HamburgerIcon from "../../public/hamburger.svg";

export const Header = ({
  className,
  ...props
}: HeaderProps): React.JSX.Element => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)!;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <header className={cn(className, styles.header)} {...props}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => handleScroll("hello")}>
          Havrylenko
        </div>
        <div className={styles.text} onClick={() => handleScroll("hello")}>
          Home
        </div>
        <div className={styles.text} onClick={() => handleScroll("about")}>
          About
        </div>
        <div className={styles.text} onClick={() => handleScroll("skills")}>
          Skills
        </div>
        <div className={styles.text} onClick={() => handleScroll("projects")}>
          Projects
        </div>
        <div className={styles.text} onClick={() => handleScroll("footer")}>
          Contact
        </div>
        <button className={styles.hamburger}>
          <HamburgerIcon />
        </button>
      </div>
    </header>
  );
};
