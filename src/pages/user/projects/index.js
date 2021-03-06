/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tabs } from 'antd'
import UserLayout from '../../../layouts/UserLayout'
import isUserMiddleware from '../../../../lib/middleware/isUserMiddleware'
import { withTranslation, i18n } from '../../../i18n'
import AllProjectsForFarmer from '../../../components/User/Project/AllProjects'
import ProjectListByStatus from '../../../components/User/Project/ProjectListByStatus'

const { TabPane } = Tabs


const Index = ({ authInfo, token, t }) => (
  <UserLayout i18n={i18n} t={t}>

    <Tabs defaultActiveKey="OverAll" tabBarStyle={{ backgroun: '#000' }}>
      <TabPane tab="Over All" key="OverAll">
        <div className="Container">
          <AllProjectsForFarmer token={token} authInfo={authInfo} />
        </div>
      </TabPane>
      <TabPane tab="Pending" key="Pending">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Pending" />
        </div>
      </TabPane>
      <TabPane tab="Working" key="Working">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Working" />
        </div>
      </TabPane>
      <TabPane tab="Finished" key="Finished">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Finished" />
        </div>
      </TabPane>
      <TabPane tab="Reject" key="Reject">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Reject" />
        </div>
      </TabPane>
      <TabPane tab="Expired" key="Expired">
        <div className="Container">
          <ProjectListByStatus token={token} authInfo={authInfo} status="Expired" />
        </div>
      </TabPane>
    </Tabs>

    <style jsx>
      {`
				.Container {
					background: #fff;
					border-radius: 1rem;
					padding: 1rem;
				}
			`}
    </style>
  </UserLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isUserMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(Index))
