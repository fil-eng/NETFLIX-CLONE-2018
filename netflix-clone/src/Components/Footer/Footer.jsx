import styles from "./Footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className={styles.Footer_outer}>
      <div className={styles.Footer_container}>
        <div className={styles.Socialicons}>
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </div>
        <div className={styles.links}>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jops</li>
              <li>Cookies Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
        </div>
        <div className={styles.Source}>
          <p>Service Codo</p>
          <p>&copy; 1997-2024 Netflix. </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
