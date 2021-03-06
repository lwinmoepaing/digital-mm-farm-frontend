/* eslint-disable react/no-array-index-key */
import { Row, Col } from 'antd'
import TwoTreeLoading from '../SVG/TwoTreeLoading'
import CustomTilt from '../CustomTilt'

const Card = () => (
  <CustomTilt>
    <div className="Container">
      <Row>
        <Col xs={{ span: 4 }} md={{ span: 8 }}>
          <div className="LeftSide">
            <TwoTreeLoading style={{ width: 40 }} />
          </div>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 16 }}>
          <div className="RightSide" />
        </Col>
      </Row>
      <style jsx>
        {`
				.LeftSide {
					text-align: center;
					border-right: 1px solid #dfdfdf;
				}

				.TreeContainer {
					border-radius: 7px;
					height: 260px;
					margin: 0 auto;
					border: 1px solid #dfdfdf;
					cursor: pointer;
					background: #fff;
					overflow: hidden;
					text-align: center;
				}

				.TreeLoadingContainer {
					height: 122px;
					width: 100%;
					background: #f3f3f3;

				}

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}

				.Container {
					border-radius: 3px;
					cursor: pointer;
					overflow: hidden;
					background: #ffffff;
					box-shadow:  13px 13px 25px #dbdbdb,
											-13px -13px 25px #ffffff;
				}

				.RightSide {
					padding: 1.2rem;
					position: relative;
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

const Arr = Array.from({ length: 8 }).fill(0)

const CardPostLoading = () => (
  <Row gutter={[16, 16]}>

    { Arr.map(() => (
      <Col key={`${Math.random().toString()}_${Date.now()}`} xs={{ span: 24 }} sm={{ span: 12 }}>
        <Card />
      </Col>
    ))}
  </Row>
)

export default CardPostLoading
