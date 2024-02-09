import styles from './Navbar.module.css';

export default function Navbar(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class=${styles.navbar}>
        <div class=${styles.left}>
            <h1>&lt;/TS&gt; Portfolio</h1>
        </div>  
        <div class='${styles.right}' id='right'>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/skillset'>Skills</a>
                </li>
                <li>
                    <a href='/portfolio'>Portfolio</a>
                </li>
                <li>
                    <a href='/contact'>Hire me</a>
                </li>
            </ul>
        </div>  
        <button class='${styles.menubar}' id='menubar'>
            <i class='bx bx-menu'></i>
        </button>
    </div>
  `);

  const Menu = document.getElementById('menubar') as HTMLDivElement

    Menu.addEventListener('click', () => {
     const Right = document.getElementById('right') as HTMLDivElement;
     Right.classList.toggle(styles.collapse); // Use styles.collapse to access the modular CSS class name
     console.log('clicked');
  });
}
