import './styles/Footer.css';

export default function Footer() {
    return (
      <div className="footerWrapper">
        <span className="footer">
            <p>Personal Website of Milo Chase</p>
            <p>TODO: add email</p>
            <a href="https://github.com/3ilo">
                <img class="icon-github" src="../public/github-mark.svg"></img> 
                &nbsp;
                <span>3ilo</span>
            </a>
        </span>
      </div>
    );
  }