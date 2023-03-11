import { Link } from "react-router-dom";
import { HeaderLogout } from "../../components/HeaderLogout";

export const DashBoardPage = () => {
  return (
    <div>
      <HeaderLogout/>
      <Link to={"/user"}>User page</Link>
    </div>
  );
};
