import NetflixLoge from "../../assets/imags/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.header_outer}>
      <div className={styles.header_container}>
        <div className={styles.lefttSide}>
          <div className={styles.logo}>
            <img src={NetflixLoge} alt="NetflixLoge" />
          </div>
          <ul>
            <li>Home</li>
            <li>TvShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div className={styles.rightSide}>
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </div>
        <div className={styles.humberger}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
}

export default Header;
