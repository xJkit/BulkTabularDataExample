import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';
const { Footer, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: '1',
    };
  }

  render() {
    return (
      <div className="app">
        <Layout className="container">
          <Sider className="side-bar">
            <Menu
              theme="dark"
              style={{ width: 240 }}
              mode="inline"
            >
              <Item><Link to="/">Welcome</Link></Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="appstore" /><span>Table Form</span></span>}
              >
                <Item key="1"><Link to="html-table">HTML Table</Link></Item>
                <Item key="2"><Link to="rc-table">RC-TABLE</Link></Item>
                <Item key="3"><Link to="fixed-data-table">FixedDataTable</Link></Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Content className="main-content">{this.props.children}</Content>
            <Footer className="footer">Created by <a href="https://github.com/xJkit" target="_blank">JayZ</a> @Copyright Reserved</Footer>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default connect()(App);
