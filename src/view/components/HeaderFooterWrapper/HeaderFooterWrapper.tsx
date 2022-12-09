import "./HeaderFooterWrapper.scss";
import React, { FunctionComponent, PureComponent, ComponentType } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const pages = ["Home", "Work", "Projects", "Music"];

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
              <p>{"Created with React.js in Typescript"}</p>
              <p>
                {"Copyright © " + new Date().getFullYear() + " Michael Lin"}
              </p>
            </div>
          </div>
        </div>
      );
    }
  };
}
