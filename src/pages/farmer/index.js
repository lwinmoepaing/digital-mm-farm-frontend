import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import FarmerLayout from '../../layouts/FarmerLayout'
import isPassAuth from '../../../lib/middleware/isPassAuth'
import { withTranslation, i18n } from '../../i18n'

const Index = ({ t }) => (
  <FarmerLayout i18n={i18n}>
    <p> lorem </p>

    <style jsx>
      {`

			`}
    </style>
  </FarmerLayout>
)

Index.getInitialProps = async (context) => {
  await isPassAuth(context)

  return {
    namespacesRequired: ['common'],
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default connect((state) => state)(withTranslation('common')(Index))
