import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
const { Header, Footer, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  render() {
    return (
      <div className="app">
        <Layout>
          <Sider>
            <Menu
              theme="dark"
              style={{ width: 240 }}
              selectedKeys={this.state.current}
            >
              <Item>Welcome</Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="appstore" /><span>Table Form</span></span>}
              >
                <Item key="1">HTML Table</Item>
                <Item key="2">RC-TABLE</Item>
                <Item key="3">FixedDataTable</Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>
            <Header>This is Header</Header>
            <Content>This is Content</Content>
            <Footer>This is Footer</Footer>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default connect()(App);
