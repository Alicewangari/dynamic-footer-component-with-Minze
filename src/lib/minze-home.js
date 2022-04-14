import { MinzeElement } from 'minze'

export class MinzeHome extends MinzeElement {

  html = () => `
  <div class="home">
    <h1>Section Engineering Education</h1>
    <p>This is a tutorial on how to build a web footer component using the Minze framework.</p>
    <p>The Minze framework is a lightweight framework for building web components.</p>
    </div>
    <minze-footer></minze-footer>
  `

  css = () => `
    :host {
      width: 100%;
      min-height: calc(100vh - 2rem);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
    }

    .home {
      text-align: center;
      font-size: 1.25rem;
      font-weight: bold;
    }
    h1{
      color: rgb(42, 134, 14);
    }
  `
}
