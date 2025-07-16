import {Layout} from 'antd';
import './App.css'
import MenuList from './components/MenuList';
import Logo from './components/Logo'
const {Header, Sider} = Layout;

function App() {
  return (
  <Layout>
    
    <Sider className='sidebar'>
       <Logo></Logo>
      <MenuList></MenuList>
    </Sider>
   
    </Layout>
  );
}

export default App
