import "./Authentication.scss";

import { PureComponent } from "react";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { RootState } from "../../../store";
import { login, logout } from "../../../actions/authActions";
import { loggedIn } from "../../../Api";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

type AuthenticationProps = {
  isLoadingLogin: boolean;
  isLoadingLogout: boolean;
  login: typeof login;
  logout: typeof logout;
};

type AuthenticationState = {
  open: boolean;
  email: string;
  password: string;
};

class Authentication extends PureComponent<
  AuthenticationProps,
  AuthenticationState
> {
  constructor(props: AuthenticationProps) {
    super(props);
    this.state = {
      open: false,
      email: "",
      password: "",
    };
  }

  handleLogin = () => {
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { open } = this.state;
    return loggedIn() ? (
      <Button
        variant="text"
        sx={{
          textTransform: "none",
          "&:hover": { backgroundColor: "transparent" },
          margin: 0,
          padding: 0,
        }}
        onClick={this.props.logout}
      >
        <div className="Authentication__button--text">Logout</div>
      </Button>
    ) : (
      <div>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            "&:hover": { backgroundColor: "transparent" },
            margin: 0,
            padding: 0,
            fontVariant: "normal",
          }}
          onClick={this.handleClickOpen}
        >
          <div className="Authentication__button--text">Login</div>
        </Button>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              onChange={this.handleEmailChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              onChange={this.handlePasswordChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>Cancel</Button>
            <Button onClick={this.handleLogin}>Login</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isLoadingLogin: state.auth.isLoadingLogin,
  isLoadingLogout: state.auth.isLoadingLogout,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      login,
      logout,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
