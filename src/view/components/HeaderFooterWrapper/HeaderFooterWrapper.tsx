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
          <div className="HeaderFooterWrapper__header">
            <div className="HeaderFooterWrapper__header--container">
              <div className="HeaderFooterWrapper__header--name">
                Michael Lin
              </div>
              <div className="HeaderFooterWrapper__header--buttons">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "HeaderFooterWrapper__header--button" +
                    (isActive
                      ? " HeaderFooterWrapper__header--buttonActive"
                      : "")
                  }
                  style={{ textDecoration: "none" }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/work"
                  className={({ isActive }) =>
                    "HeaderFooterWrapper__header--button" +
                    (isActive
                      ? " HeaderFooterWrapper__header--buttonActive"
                      : "")
                  }
                  style={{ textDecoration: "none" }}
                >
                  Work
                </NavLink>
              </div>
            </div>
          </div>
          <div className="HeaderFooterWrapper__wrappedComponent">
            <WrappedComponent />
          </div>
          <div className="HeaderFooterWrapper__footer">
            <div className="HeaderFooterWrapper__footer--social">
              <LinkedInIcon className="HeaderFooterWrapper__footer--socialIcon" />
              <GitHubIcon className="HeaderFooterWrapper__footer--socialIcon" />
            </div>
            <div className="HeaderFooterWrapper__footer--copyright">
              {"Copyright © " + new Date().getFullYear() + " Michael Lin"}
            </div>
          </div>
        </div>
      );
    }
  };
}
