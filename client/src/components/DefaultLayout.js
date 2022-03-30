import { Layout, Menu } from 'antd';
import React from 'react'

import { Link } from 'react-router-dom'


import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
constructor(){
    super();
    this.state = {
        collapsed: false,
      };
}

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

 logout=()=>{
  localStorage.removeItem('user')
 window.location.reload()
  //localStorage.clear();
   }


  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}
         style={{position: 'sticky' , overflow : 'auto' , height:'100%' , top:0}}>
          <div className="logo" >
            {this.state.collapsed ? (<h1>JPA</h1>) : (<h1>job-portal-app</h1>)}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to = '/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/profile" icon={<VideoCameraOutlined />}>
            <Link to = '/profile'>Profile</Link>
            </Menu.Item>
            <Menu.Item key="/appliedjobs" icon={<UploadOutlined />}>
            <Link to = '/appliedjobs'>Applied Jobs</Link>
            </Menu.Item>
            <Menu.Item key="/postjob" icon={<UploadOutlined />}>
            <Link to = '/postjob'>Post Jobs</Link>
            </Menu.Item>
            <Menu.Item key="/posted" icon={<UploadOutlined />}>
            <Link to = '/posted'>Posted</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<UploadOutlined />}>
            <Link to='/' onClick={this.logout}>Logout</Link>
            {/* <Link to = '/login'>Logout</Link> */}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 , position: 'sticky' , overflow : 'auto' , top:0 , zIndex:9999}}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout
