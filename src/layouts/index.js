import DefaultLayout from "./defaultLayout";
import AdminLayout from "./adminLayout/components"

const layouts = {
   default: DefaultLayout,
   admin: AdminLayout
};
const LayoutWrapper = (props) => { 
     
  const Layout = layouts[props.children.type.layout];
  
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  // if not render children with fragment
  return  <DefaultLayout {...props}>{props.children}</DefaultLayout>;
};

export default LayoutWrapper;