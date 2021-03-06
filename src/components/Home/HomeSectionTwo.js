import {
  Row, Col,
} from 'antd'

import PropTypes from 'prop-types'
import DataSecurityGetMoney from '../Common/SVG/DataSecurityGetMoney'
import DataWorkingTree from '../Common/SVG/DataWorkingTree'
import DataConfirm from '../Common/SVG/DataConfirm'
import DataChoose from '../Common/SVG/DataChoose'

const HomeSectionTwo = ({ t }) => (
  <div className="SectionTwoContainer">
    <div className="BackgroundOverLay" />
    <div className="HowItWorksContainer">
      <h1>
        {t('HowWorks')}
      </h1>
      <p>
        {t('HowWorksText')}
      </p>
    </div>
    <div style={{ width: '100%', overflow: 'hidden', padding: '0 1.5rem' }}>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataChoose />
            </p>
            <p className="CardRight">
              {t('FirstStep')}
            </p>
          </div>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataConfirm />
            </p>
            <p className="CardRight">
              {t('SecondStep')}
            </p>
          </div>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataWorkingTree />
            </p>
            <p className="CardRight">
              {t('ThirdStep')}
            </p>
          </div>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 6 }}>
          <div className="CustomCardStyle">
            <p className="CardLeft">
              <DataSecurityGetMoney />
            </p>
            <p className="CardRight">
              {t('FourthStep')}
            </p>
          </div>
        </Col>
      </Row>
    </div>

    <style jsx>
      {`
				.SectionTwoContainer {
					padding-top: 5.5rem;
					padding-bottom: 2rem;
					position: relative;
					background: #f5f5f5;
				}

				.SectionTwoContainer > .BackgroundOverLay {
					position: absolute;
					top: 0;
					left: 0;
					background-color: #d5ffc5;
					width: 100%;
					height: 80%;
					display: block;
					z-index: 0;
				}

				.HowItWorksContainer {
					padding: 0 2.5rem;
					position: relative;
					z-index: 1;
				}

				.HowItWorksContainer > p {
					max-width: 700px;
				}

				.CustomCardStyle {
					display: flex;
					padding: 1rem;
					border-radius: .5rem;
					width: 100%;
					min-height: 150px;
					background: #ffffff;
					box-shadow:  5px 5px 10px #ededed,
             -5px -5px 10px #ffffff;
				}

				.CardLeft {
					flex: 2;
					display: flex;
					height: 120px;
				}

				.CardRight {
					font-size: .9em;
					flex: 3;
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					padding-left: 1px;
					height: 123px;
				}

				@media screen and (max-width: 767px) {
					.CustomCardStyle {
						flex-direction: column;
						min-height: 280px;
					}
					.CardLeft {
						flex: 1;
						display: flex;
					}

					.CardRight {
						flex: 1;
						display: flex;
					}
				}

				@media screen and (max-width: 420px) {

					.CardLeft {
						width: 100%;
					}

					.CardRight {
						width: 100%;
					}
				}
			`}
    </style>
  </div>

)

HomeSectionTwo.propTypes = {
  t: PropTypes.func.isRequired,
}

export default HomeSectionTwo
