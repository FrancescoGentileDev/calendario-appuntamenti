// @ts-nocheck
import React from "react";
import { CDBSidebar, CDBSidebarHeader, CDBSidebarMenuItem, CDBSidebarContent, CDBSidebarMenu, CDBSidebarSubMenu, CDBSidebarFooter, CDBBadge, CDBContainer } from "cdbreact";
import { useNavigate, Link } from "react-router-dom";
import "../styles/sidebar.css";
const Sidebar = (props) => {
  const [value, setvalue] = React.useState("");
  const [display, setDisplay] = React.useState(true);
  React.useEffect(() => {
    var string = window.location.pathname.split("/");
    var cerca = string[2];
    setvalue(cerca);

    document.getElementById(cerca).style.backgroundColor = "black";
    document.getElementById(cerca).style.color = "white";
  });
  const click = () => {
    document.getElementById(value).style.backgroundColor = "#f0f0f0";
    document.getElementById(value).style.color = "black";
    setvalue("");
  };

  
  return (
    <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" toggled="false" minWidth="70px" style={{ marginBottom: 0, minHeight: window.innerHeight }} className="sideroot">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />} className="sideheader">
        <div className="container" style={{ display: "flex", alignItems: "center" }}>
          <h6 className="ml-2">Calendar.io</h6>
        </div>
      </CDBSidebarHeader>
      <CDBSidebarContent className="sidecontenent" id="sidecontenent">
        <CDBSidebarMenu>
          <Link to="calendario" onClick={click}>
            <CDBSidebarMenuItem id="calendario" icon="th-large">
              Calendario
            </CDBSidebarMenuItem>
          </Link>
          <Link to="clienti" onClick={click}>
            <CDBSidebarMenuItem id="clienti" icon="sticky-note">
              Clienti
            </CDBSidebarMenuItem>
          </Link>
          <Link to="setting" onClick={click}>
            <CDBSidebarMenuItem id="setting" icon="chart-line" iconType="solid">
              metrics
            </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
};

export default Sidebar;
