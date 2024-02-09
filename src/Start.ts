import Router from './assets/router/router.ts';
import Footer from './components/footer/Footer.ts';
import Navbar from './components/navbar/Navbar.ts';

export default function Start(DOM: HTMLDivElement) {
  DOM.innerHTML = (`
    <div>
        <nav id='navbar'></nav>
        <div id='router'></div>
        <footer id='footer'></footer>
    </div>
  `);
  
  const nav = document.getElementById('navbar') as HTMLDivElement | null;
  Navbar(nav!);
  
  const routes = document.getElementById('router') as HTMLDivElement;
  Router(routes);
  
  const footer = document.getElementById('footer') as HTMLDivElement | null;
  Footer(footer!);

 
}
