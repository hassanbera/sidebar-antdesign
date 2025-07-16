import { Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'; 

const MenuList = () => {
  return (
    <Menu theme='dark'>
      <Menu.Item key="home" icon={<HomeOutlined />} >
      Home
      </Menu.Item>
      <Menu.Item key="home" icon={<AppStoreOutlined />} >
      Activity
      </Menu.Item>
      <Menu.Item key="activity" icon={<AreaChartlined />}>
      Progress
      </Menu.Item>
      <Menu.Item key="progress" icon={<HomeOutlined />} >
      
      </Menu.Item>
    
      <Menu.Item key="payment" icon={<HomeOutlined />} ></Menu.Item>
    
    </Menu>
  )
}

export default MenuList