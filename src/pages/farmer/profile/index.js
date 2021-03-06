/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FarmerLayout from '../../../layouts/FarmerLayout'
import isFarmerMiddleware from '../../../../lib/middleware/isFarmerMiddleware'
import { withTranslation, i18n } from '../../../i18n'
import UserProfile from '../../../components/Common/Profile/UserProfile'

const Index = ({ authInfo, token, t }) => (
  <FarmerLayout i18n={i18n} t={t}>

    <UserProfile token={token} t={t} />

    <style jsx>
      {`
				.Container {
					background: #fff;
					border-radius: 1rem;
					padding: 1rem;
				}
			`}
    </style>
  </FarmerLayout>
)

Index.getInitialProps = async (context) => {
  const { authInfo, token } = await isFarmerMiddleware(context)

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
