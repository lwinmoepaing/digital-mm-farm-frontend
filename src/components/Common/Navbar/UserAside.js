/* eslint-disable react/prop-types */
import { Menu } from 'antd'
import { useState, useEffect } from 'react'
import {
  ProjectOutlined,
  CopyOutlined,
  SettingFilled,
  DashboardOutlined,
  LogoutOutlined,
  FlagOutlined,
  QuestionCircleOutlined,
  AlignLeftOutlined,
  SmileOutlined,
  FolderAddOutlined,
} from '@ant-design/icons'
import { connect } from 'react-redux'

import { Link, withTranslation } from '../../../i18n'
import { logout } from '../../../../store/actions/authAction'

const FarmerAside = (props) => {
  const { router, logout: onLogout, t } = props

  const links = [
    { name: 'Dashboard', url: '/user', icon: DashboardOutlined },
    { name: 'My Projects', url: '/user/projects', icon: ProjectOutlined },
    { name: 'Farmer Projects', url: '/user/farmer-projects', icon: CopyOutlined },
    { name: 'Blog List', url: '/user/blog', icon: AlignLeftOutlined },
    { name: 'My Blog', url: '/user/blog/me', icon: SmileOutlined },
    { name: 'Create Blog', url: '/user/blog/create', icon: FolderAddOutlined },
    { name: 'Map', url: '/user/map', icon: FlagOutlined },
    { name: 'About', url: '/user/about', icon: QuestionCircleOutlined },
    { name: 'Profile', url: '/user/profile', icon: SettingFilled },
  ]

  const [state, setstate] = useState(router.pathname)

  useEffect(() => {
    setstate(router.pathname)
  }, [router.pathname])


  return (
    <div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={[state]}>
        {links.map((link) => (
          <Menu.Item key={link.url}>
            <Link href={link.url}>
              <a href="#!">
                <link.icon />
                <span>{t(link.name)}</span>
              </a>
            </Link>
          </Menu.Item>
        ))}

        <Menu.Item
          theme="danger"
          onClick={async () => {
            await onLogout()
            router.push('/')
          }}
        >
          <LogoutOutlined style={{ color: 'red' }} />
          <span style={{ color: 'red' }}> Logout </span>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default connect((state) => state, { logout })(withTranslation('common')(FarmerAside))
