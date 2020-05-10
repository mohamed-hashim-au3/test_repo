import React, { Component } from "react";
// import { Link, NavLink } from "react-router-dom";
import Link from "next/link";
import { Layout, Menu } from "antd";
import "./sidebar.css";
const { Content, Footer, Header, Sider } = Layout;
class Sidebar extends Component {
  render() {
    // const {active}=this.props
    // const activeLink=active && active > 0 ? active : 1
    return (
      <>
        <Sider
          width={200}
          style={{ background: "#fff" }}
          className="custom-sider-patient"
        >
          <Menu
            mode="inline"
            // defaultSelectedKeys={[activeLink]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          >
            <Menu.Item key="1">
              {/* <Icon type="file" /> */}
              {/* <Link to="/Patient"><span>Profile</span></Link> */}
              <Link href="/Patient" >
                <span>
                  {/* <img src={require("./male.png")} width="24" /> */}
                  Profile
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              {/* <Icon type="file" /> */}
              <Link href="/Password" >
                <span>
                  {/* <img src={require("./password.png")} width="24" /> */}
                  Password
                </span>
              </Link>
              {/* <Link to="/Password" ><span>Password</span></Link> */}
            </Menu.Item>
            <Menu.Item key="3">
              {/* <Icon type="file" /> */}
              <Link href="/Notification" >
                <span>
                  {/* <img src={require("./push.png")} width="24" /> Notification */}
                  Settings
                </span>
              </Link>
            </Menu.Item>

            <Menu.Item key="9">
              {/* <Icon type="file" /> */}
              <Link href="/Insurance" >
                <span>
                  {/* <img src={require("./insurance.png")} width="24" /> */}
                  Insurance
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              {/* <Icon type="file" /> */}
              <Link href="/Demographic" >
                <span>
                  {/* <img src={require("./info.png")} width="24" /> */}
                  Demographic Info
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              {/* <Icon type="file" /> */}
              <Link href="/Authorization" >
                <span>
                  {/* <img src={require("./validation.png")} width="24" /> */}
                  Authorizations
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              {/* <Icon type="file" /> */}
              <Link href="/Payment" >
                <span>
                  {/* <img src={require("./payment.png")} width="24" /> */}
                  Payment
                </span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </>
    );
  }
}

export default Sidebar;
