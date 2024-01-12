
import { Outlet} from "react-router-dom";
import AdminHead from "./head";
const AdminHome = () => {
  return (
    <div className="admin-home">
      <AdminHead/>
      <Outlet/>
    </div>
  );
};

export default AdminHome;
