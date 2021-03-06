
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StaffLayout from '../../../layouts/StaffLayout'
import isStaffMiddleware from '../../../../lib/middleware/isStaffMiddleware'
import QuillEditor from '../../../components/Common/Editor/QuillEditor'
import { withTranslation, i18n } from '../../../i18n'

const FarmerCreateBlog = ({ authInfo, token, t }) => (
  <StaffLayout i18n={i18n} t={t}>

    <QuillEditor token={token} />
    <style jsx>
      {`
				.Container {
					background: #fff;
					border-radius: 1rem;
					padding: 1rem;
				}
			`}
    </style>
  </StaffLayout>
)

FarmerCreateBlog.getInitialProps = async (context) => {
  const { authInfo, token } = await isStaffMiddleware(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}

FarmerCreateBlog.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(FarmerCreateBlog))
