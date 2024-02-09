
import styles from './NotFound.module.css'

export default function NotFound(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class=${styles.container}>
       <div>
       <h1>NotFound</h1>
       <p>It seems you've lost please return back <a href='/'>Home</a></p>
       </div>
    </div>
  `);

}