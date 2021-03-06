import PropTypes from 'prop-types'
import Head from 'next/head'
import { connect } from 'react-redux'
import Layout from '../layouts/Layout'
import LoginForm from '../components/Common/LoginForm/LoginForm'
import TestingModal from '../components/Common/Modal/TestingModal'
import { withTranslation, i18n } from '../i18n'
import { onSubmitAuth } from '../../store/actions/authAction'
import isAuthMiddleware from '../../lib/middleware/isAuthMiddleware'


const Login = (props) => {
  const { t, Auth, onSubmitAuth: onSubmitLogin } = props
  return (
    <Layout i18n={i18n}>
      <Head>
        <title> Login Page </title>
      </Head>
      <div>
        <LoginForm
          t={t}
          onSubmitAuth={onSubmitLogin}
          Auth={Auth}
        />

        <TestingModal t={t} />
      </div>
    </Layout>
  )
}

Login.propTypes = {
  t: PropTypes.func.isRequired,
  onSubmitAuth: PropTypes.func.isRequired,
  Auth: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
}

Login.getInitialProps = async (ctx) => {
  // const Console = console
  const { isValid, authInfo } = await isAuthMiddleware(ctx)
  // Console.log('is Valid', isValid)
  const payLoad = {
    Auth: isValid === true ? JSON.parse(JSON.stringify(authInfo)) : null,
  }
  return ({
    namespacesRequired: ['common'],
    ...payLoad,
  })
}

export default connect((state) => state, { onSubmitAuth })(withTranslation('common')(Login))
