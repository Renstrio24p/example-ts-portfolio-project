import styles from './Home.module.css'

export default function Home(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
    <div class='${styles.home} content'>
       <div class=${styles.left}>
          <h1>Hi, I'm Example</h1>
          <p>I'm a Web Developer</p>
          <ul>
            <li>
               <a href='#0' class='bx bxl-facebook-circle'></a>
            </li>
            <li>
               <a href='#0' class='bx bxl-linkedin-square'></a>
            </li>
            <li>
               <a href='#0' class='bx bxl-github'></a>
            </li>
            <li>
               <a href='#0' class='bx bxl-discord-alt'></a>
            </li>
          </ul>
       </div>
       <div class=${styles.right}>
          <img src='profile.png' alt='profile cat'/>
       </div>
    </div>
    <div class='${styles.about} content'>
        <div class=${styles.left}>
          <h3>About</h3>
          <p>
            &lt;p&gt; <br>
            <span class=${styles.hello}> Hello! </span> <br>
            My name is [Your Name] and I specialize in web developement that utilizes HTML, CSS, JS, and REACT etc.
            I am a highly motivated individual and eternal optimist dedicated to writing clear, concise, robust code that works. Striving to never stop learning and improving.
            When I'm not coding, I am writing bolgs, reading, or picking up some new hands-on art project like photography.
            I like to have my perspective and belief systems challenged so that I see the world through new eyes.
            <br>
            &lt;/p&gt;
          </p>
        </div>
        <div class=${styles.right}>
           <div class=${styles.logo}>
              <img src='ts.png' alt='ts' />
           </div>
           <div class=${styles.logo}>
              <img src='sass.png' alt='sass' />
           </div>
        </div>
    </div>
    <div class='${styles.skillset} content'>
    <div class=${styles.overlay}></div>
    <h2>My Skillset</h2>
         <div class=${styles.skills}>
            <div class=${styles['skill-list']}>
               <h3>Front-End</h3>
               <ul>
                  <li>
                     <i class='bx bxl-javascript'></i> JavaScript
                  </li>
                  <li>
                     <i class='bx bxl-typescript'></i> TypeScript
                  </li>
                  <li>
                     <i class='bx bxl-react'></i> React
                  </li>
                  <li>
                     <i class='bx bxl-vuejs'></i> Vue
                  </li>
                  <li>
                     <i class='bx bxl-angular'></i> Angular
                  </li>
               </ul>
            </div>
            <div class=${styles['skill-list']}>
               <h3>Back-End</h3>
               <ul>
                  <li>
                     <i class='bx bxl-firebase'></i> Firebase
                  </li>
                  <li>
                     <i class='bx bxl-mongodb'></i> MongoDB
                  </li>
                  <li>
                     <i class='bx bxl-postgresql'></i> Postgres SQL
                  </li>
               </ul>
            </div>
         </div>
         <div class='${styles.works}'>
            <h3>Work</h3>
            <p>
               My Recent Projects
            </p>
            <div class=${styles.divider}></div>
            <p>
               I had the pleasure of working with these awesome projects.
            </p>
            <div class=${styles.list}>
               <div class='${styles['left-arrow']}'>
                  <i class='bx bx-chevron-left'></i>
               </div>
               <div class='${styles.project}'>
                  <img src='project1.png' alt='project1'/>
               </div>
               <div class='${styles['right-arrow']}'>
               <i class='bx bx-chevron-right'></i>
               </div>
            </div>
            <div class=${styles['contact-me']}>
               <div class=${styles['contact-left']}>
                  <form>
                     <div class=${styles['form-container']}>
                        <h3> Let's talk together </h3>
                        <div class=${styles.box}>
                           <label for='email'>Email</label> 
                           <input type='email' name='email' id='email' placeholder='Email address' /> 
                           <label for='name'>Your name</label> 
                           <input type='text' name='name' id='name' placeholder='Your name' /> 
                           <label for='message'>Your message</label> 
                           <input type='text' name='message' id='message' placeholder='Your message' />
                           <button>Submit</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div class=${styles['contact-right']}>
                  <img src='profile.png' alt='cat profile' />
               </div>
            </div>
         </div>
    </div>
  `);

}