/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Menu, Icon, Radio } from 'antd'
import PropTypes from 'prop-types'
import { useState, useEffect, memo } from 'react'
import { Link, withTranslation } from '../../../i18n'


const links = [
  { name: 'Home', url: '/', icon: 'home' },
  { name: 'About', url: '/about', icon: 'read' },
  { name: 'Login', url: '/login', icon: 'login' },
]

const styles = {
  LayoutHeader: {
    padding: 0, height: '50px', backgroundColor: '#fff', position: 'fixed', width: '100%', zIndex: '10', top: 0, borderBottom: '1px solid #dfdfdf',
  },
  MenuLineHeight: { lineHeight: '50px', textAlign: 'right', paddingRight: '1.5rem' },
}

const GuestNavbar = ({
  Layout, router, i18n, t,
}) => {
  const [state, setstate] = useState(router.pathname)
  useEffect(() => {
    setstate(router.pathname)
  }, [router.pathname])


  const changeLocale = ({ target: { value } }) => {
    if (!i18n.language) {
      return false
    }
    return i18n.changeLanguage(value)
  }


  return (
    <Layout.Header style={styles.LayoutHeader}>
      <div className="Container">
        <div className="logo">
          <h3>
            Digital MM Farm
          </h3>
        </div>

        <div className="MenuContainer">
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[state]}
            style={styles.MenuLineHeight}
          >
            {links.map((link) => (
              <Menu.Item key={link.url}>
                <Link href={link.url}>
                  <a href="#!">
                    <Icon type={link.icon} />

                    {t(link.name)}

                  </a>
                </Link>
              </Menu.Item>
            ))}
            <Menu.Item style={{ border: 'none' }}>
              <div>
                <Radio.Group defaultValue={i18n.language || 'mm'} onChange={changeLocale} buttonStyle="solid" size="small">
                  <Radio.Button key="en" value="en">
                    <img style={{ width: 25, height: 15 }} src="/svg/en.svg" alt="enimage" />
                  </Radio.Button>
                  <Radio.Button key="cn" value="mm">
                    <img style={{ width: 35, height: 14 }} src="/svg/mm.svg" alt="mmimage" />
                  </Radio.Button>
                </Radio.Group>
              </div>
            </Menu.Item>
          </Menu>
        </div>

        <div className="RightNavigator">
          <div
            className="ImgContainer"
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'mm' : 'en')}
          >
            {
							i18n.language === 'en' ? (<img src="/svg/mm.svg" alt="enimage" />) : (<img src="/svg/en.svg" alt="enimage" />)
						}
          </div>
        </div>
      </div>
      <style jsx>
        {`
					.logo {
						height: 51px;
						line-height: 51px;
						display: inline-block;
						float: left;
						padding-left: .5rem;
					}
					.Container {
						max-width: 1400px;
						margin: 0 auto;
					}
					.MenuContainer {
						display: none !important;
						color: red;
					}
					@media screen and (min-width: 600px) {
						.MenuContainer {
							display: block !important;
						}
						.RightNavigator {
							display: none;
						}
					}

					.RightNavigator {
						float: right;
					}

					.RightNavigator > .ImgContainer {
						width: 26px;
						height: 26px;
						position: relative;
						top: 10px;
						right: .3em;
						background: black;
						display: inline-block;
						border-radius: 1rem;
						overflow: hidden;
					}

					.RightNavigator > .ImgContainer > img {
						width: 100%;
						object-fit: cover;
						display: inline-block;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
					}
				`}
      </style>
    </Layout.Header>
  )
}

GuestNavbar.propTypes = {
  Layout: PropTypes.func.isRequired,
  router: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  i18n: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
}

export default memo(withTranslation('common')(GuestNavbar))
