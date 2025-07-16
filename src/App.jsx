import {Button, Layout, theme} from 'antd';
import './App.css'
import MenuList from './components/MenuList';
import Logo from './components/Logo'
import ToggleThemeButton from './components/ToggleThemeButton';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import React from 'react';
const {Header, Sider} = Layout;

function App() {
  const [darkTheme, setDarkTheme] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  
  return (
  <Layout>
    
    <Sider className='sidebar' 
    theme={darkTheme ? 'dark' : 'light'}
    collapsible
    collapsed={collapsed}
    trigger={null}
    >
       <Logo></Logo>
      <MenuList darkTheme={darkTheme}></MenuList>
      <ToggleThemeButton darkTheme={darkTheme} toggleTheme = {toggleTheme} />
    </Sider>
    <Layout>
      <Header style={
        {padding: 0, background: colorBgContainer}
      }>
        <Button 
        type='text'
        className='toggle'
        onClick={()=>setCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}/>
      </Header>
    </Layout>
   
    </Layout>
  );
}

export default App
