import { Menu } from 'antd'
import { HomeOutlined, PayCircleOutlined, SettingOutlined, AreaChartOutlined, StarOutlined, BarsOutlined } from '@ant-design/icons'; 

const MenuList = ({darkTheme}) => {
  const items = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home'
    },
    {
      key: 'activity',
      icon: <StarOutlined />,
      label: 'Activity'
    },
    {
      key: 'progress',
      icon: <AreaChartOutlined />,
      label: 'Progress'
    },
    {
      key: 'payment',
      icon: <PayCircleOutlined />,
      label: 'Payment'
    },
    {
      key: 'setting',
      icon: <SettingOutlined />,
      label: 'Setting'
    },
    {
      key: 'subtasks',
      icon: <BarsOutlined />,
      label: 'Subtasks',
      children: [
        {
          key: 'task-1',
          label: 'Task 1',
        },
        {
          key: 'task-2',
          label: 'Task 2',
        },
        {
          key: 'task-3',
          label: 'Task 3',
          children: [
            {
              key: 'subtask-1', 
              label: 'Subtask 1',
            },
            {
              key: 'subtask-2',
              label: 'Subtask 2',
            }
          ]
        }
      ]
    }
  ];

  return (
    <Menu className='menu-bar' theme={darkTheme ? 'dark' : 'light'} items={items} mode='inline' />
  )
}

export default MenuList;