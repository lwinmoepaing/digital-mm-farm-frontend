/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/prop-types */
import { Row, Col } from 'antd'
import { BASE_API_URL } from '../../../../config'
import { Router } from '../../../i18n'
import CustomTilt from '../CustomTilt'

const BlogCard = ({ blog, authInfo }) => {
  const goTo = () => {
    if (authInfo) {
      Router.push(`/${authInfo.role.toLowerCase()}/blog/_id?id=${blog._id}`, `/${authInfo.role.toLowerCase()}/blog/${blog._id}`, { shallow: true })
      return
    }

    Router.push('/login')
  }
  return (
    <CustomTilt>
      <div className="Container" onClick={goTo}>
        <Row>
          <Col xs={{ span: 4 }} md={{ span: 8 }}>
            <img src={BASE_API_URL + blog.headImg} alt={blog.title} />
          </Col>
          <Col xs={{ span: 20 }} md={{ span: 16 }}>
            <div className="RightSide">
              <h2 className="font-mm">
                {blog.title}
              </h2>
              <p>
                written By
                {' '}
                {blog.author.name}
              </p>
              <div className="ImageContainer">
                <img src={BASE_API_URL + blog.author.image} alt={blog.title} />
              </div>
            </div>
          </Col>
        </Row>

        <style jsx>
          {`

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			.Container {
				border-radius: 3px;
				cursor: pointer;
				background: #fafafa;
				overflow: hidden;
				background: #ffffff;
				box-shadow:  13px 13px 25px #dbdbdb,
										-13px -13px 25px #ffffff;
			}

			.RightSide {
				padding: 1.2rem;
				position: relative;
				border-left: 1px solid #dfdfdf;
				min-height: 148px;
			}

			.ImageContainer {
				position: absolute;
				width: 30px;
				overflow: hidden;
				height: 30px;
				border: 2px solid #ffffff;
				border-radius: 50px;
				left: 0;
				top: 50%;
				-webkit-transform: translateY(-50%);
				transform: translateY(-50%) translateX(-50%);
			}

			h2 {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;;
			}

		`}

        </style>
      </div>
    </CustomTilt>
  )
}

export default BlogCard
