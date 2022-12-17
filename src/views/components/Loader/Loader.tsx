import variables from "../../../main.scss";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

type LoaderProps = {
  isLoading: boolean;
};

export default function Loader(props: LoaderProps) {
  const { isLoading } = props;
  return (
    <Backdrop
      sx={{
        color: variables.colorPrimary,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
