import "./HeaderFooterWrapper.scss";
import { PureComponent, ComponentType } from "react";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

export function withHeaderFooterWrapper(WrappedComponent: ComponentType) {
  return class HeaderFooterWrapper extends PureComponent {
    render() {
      return (
        <div>
          <div className="HeaderFooterWrapper__header">
            <div className="HeaderFooterWrapper__header--container">
              <div>
                <NavLink
                  to="/"
                  className="HeaderFooterWrapper__header--name"
                  style={{ textDecoration: "none" }}
                >
                  Michael Lin
                </NavLink>
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
                  to="/work/"
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
                <NavLink
                  to="/music/"
                  className={({ isActive }) =>
                    "HeaderFooterWrapper__header--button" +
                    (isActive
                      ? " HeaderFooterWrapper__header--buttonActive"
                      : "")
                  }
                  style={{ textDecoration: "none" }}
                >
                  Music
                </NavLink>
                <NavLink
                  to="/travel/"
                  className={({ isActive }) =>
                    "HeaderFooterWrapper__header--button" +
                    (isActive
                      ? " HeaderFooterWrapper__header--buttonActive"
                      : "")
                  }
                  style={{ textDecoration: "none" }}
                >
                  Travel
                </NavLink>
                <NavLink
                  to="/other/"
                  className={({ isActive }) =>
                    "HeaderFooterWrapper__header--button" +
                    (isActive
                      ? " HeaderFooterWrapper__header--buttonActive"
                      : "")
                  }
                  style={{ textDecoration: "none" }}
                >
                  Other
                </NavLink>
              </div>
            </div>
          </div>
          <div className="HeaderFooterWrapper__wrappedComponent">
            <WrappedComponent />
          </div>
          <div className="HeaderFooterWrapper__footer">
            <div className="HeaderFooterWrapper__footer--social">
              <div className="HeaderFooterWrapper__footer--socialButton">
                <IconButton
                  href="https://www.linkedin.com/in/michaellin986/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ padding: 0 }}
                >
                  <LinkedInIcon className="HeaderFooterWrapper__footer--socialIcon" />
                </IconButton>
              </div>
              <div className="HeaderFooterWrapper__footer--socialButton">
                <IconButton
                  href="https://github.com/michaellin986/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ padding: 0 }}
                >
                  <GitHubIcon className="HeaderFooterWrapper__footer--socialIcon" />
                </IconButton>
              </div>
            </div>
            <div className="HeaderFooterWrapper__footer--copyright">
              {"Copyright © " +
                new Date().getFullYear() +
                " Michael Lin. All rights reserved."}
            </div>
          </div>
        </div>
      );
    }
  };
}
