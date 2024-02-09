
import styles from './Footer.module.css'

export default function Footer(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class='${styles.footer} content'>
      <h3>GET IN TOUCH</h3>
      <p>
      Elevating Creativity, Crafting Experiences - Discover the depth of my portfolio, showcasing a blend of innovation and artistry. Connect with me to collaborate on exciting projects or inquire about my services. Let's transform ideas into captivating realities together.
      </p>
      <ul class=${styles['social-list']}>
        <li>
          <a href='#0' class='bx bxl-linkedin-square'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-facebook-square'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-discord-alt'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-twitter'></a>
        </li>
        <li>
          <a href='#0' class='bx bxl-instagram'></a>
        </li>
      </ul>
      <div class='${styles.trademark}'>&copy; Template TypeScript Basics 2024 &trade;</div>
    </div>
  `);

}
