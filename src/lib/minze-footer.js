import { MinzeElement } from "minze";
export class MinzeFooter extends MinzeElement {
  html = () => `
  <div class="footer">
  <p>Copyright &copy; ${new Date().getFullYear()}</p>
</div>
`;

  css = () => `
  :host {
    color: #fff;
    font-size: 1.25rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    padding: 0.5rem;
  }
`;
}
