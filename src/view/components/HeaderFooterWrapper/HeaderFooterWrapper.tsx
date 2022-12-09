import "./HeaderFooterWrapper.scss";
import { PureComponent, ComponentType } from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export function withHeaderFooterWrapper(WrappedComponent: ComponentType) {
  return class HeaderFooterWrapper extends PureComponent {
    render() {
      return (
        <div>
          <div className="HeaderFooterWrapper--header">
            <div className="HeaderFooterWrapper--header__container">
              <div className="HeaderFooterWrapper--header__name">
                Michael Lin
              </div>
              <div className="HeaderFooterWrapper--header__buttons">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "HeaderFooterWrapper--header__button" +
                    (isActive
                      ? " HeaderFooterWrapper--header__buttonActive"
                      : "")
                  }
                  style={{ textDecoration: "none" }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    "HeaderFooterWrapper--header__button" +
                    (isActive
                      ? " HeaderFooterWrapper--header__buttonActive"
                      : "")
                  }
                  style={{ textDecoration: "none" }}
                >
                  Work
                </NavLink>
              </div>
            </div>
          </div>
          <div className="HeaderFooterWrapper--wrappedComponent">
            <WrappedComponent />
          </div>
          <div className="HeaderFooterWrapper--footer">
            <div className="HeaderFooterWrapper--footer__social">
              <LinkedInIcon className="HeaderFooterWrapper--footer__socialIcon" />
              <GitHubIcon className="HeaderFooterWrapper--footer__socialIcon" />
            </div>
            <div className="HeaderFooterWrapper--footer__copyright">
              {"Copyright © " + new Date().getFullYear() + " Michael Lin"}
            </div>
          </div>
        </div>
      );
    }
  };
}
