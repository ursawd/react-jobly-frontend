import { useHistory } from "react-router-dom";
import JoblyApi from "./api";
const Logout = ({ setCurrentUser }) => {
  let history = useHistory();
  setCurrentUser(() => null);
  JoblyApi.token = null;
  history.push("/");
  return null;
};

export default Logout;
