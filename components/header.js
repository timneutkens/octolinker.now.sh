import Link from "next/link";
import dynamic from 'next/dynamic';
import Container from "./container";
import HideOnMobile from "./hide-on-mobile";

const InstallButton = dynamic(import ('./installButton'),{ssr:false});

export default function Nav() {
  return (
    <HideOnMobile>
      <style jsx>
        {`
          .nav-box {
            box-shadow: 0px 0px 3px 0px rgba(40, 40, 40, 0.4);
          }

          .nav {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
            padding-top: 27px;
            padding-bottom: 15px;
          }

          .nav-item {
            font-size: 12px;
            line-height: 46px;

            font-weight: 700;
            margin: 0 19px;
            text-decoration: none;
            text-transform: uppercase;
            color: #1c1f2b;
          }

          .nav-item:first-child {
            margin-left: 0;
          }

          .nav-item:hover {
            border-bottom: 2px solid #1c1f2b;
          }

          .right {
            display: grid;
            grid-template-columns: repeat(3, auto);
            justify-content: space-between;
            align-items: center;
          }

          .icon-twitter,
          .icon-gihub {
            display: grid;
            width: 25px;
            height: 25px;
            margin-right: 10px;
          }

          .icon-twitter:hover,
          .icon-gihub:hover {
            fill: #666;
          }
        `}
      </style>
      <div className="nav-box hide-on-mobile">
        <Container>
          <nav className="nav">
            <div className="nav-menu-wrapper">
              <Link>
                <a className="nav-item" href="/#how-it-works">
                  How it works
                </a>
              </Link>
              <Link>
                <a className="nav-item" href="/#features">
                  Features
                </a>
              </Link>
              <Link>
                <a className="nav-item" href="/#languages">
                  Languages
                </a>
              </Link>
              <Link>
                <a className="nav-item" href="/#sponsors">
                  Sponsors
                </a>
              </Link>
            </div>
            <div className="right">
              <a href="https://github.com/OctoLinker/OctoLinker">
                <svg className="icon-gihub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>GitHub</title><path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path></svg>
              </a>
              <a href="https://twitter.com/OctoLinker">
                <svg className="icon-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Twitter</title><path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path></svg>             
              </a>
              <InstallButton compact={true} trackingLabel="install-header" />
            </div>
          </nav>
        </Container>
      </div>
    </HideOnMobile>
  );
}
