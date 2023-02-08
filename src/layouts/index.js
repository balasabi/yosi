
import AdminLayout from "./adminLayout";

const layouts = {
  admin: AdminLayout
};
const LayoutWrapper = (props) => {

  const Layout = layouts[props.children.type.layout];
  console.log("********xzdzxc******"+ props.children.type.layout)
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
};

export default LayoutWrapper;
