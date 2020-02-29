import Head from 'next/head'
import { useRouter } from 'next/router'
import UserLayout from '../../../layouts/UserLayout'
import { withTranslation, i18n } from '../../../i18n'
import isPassAuth from '../../../../lib/middleware/isPassAuth'
import ContactDetail from '../../../components/Farmer/Project/ContactDetail'

const UserProfile = ({ token, authInfo }) => {
  const router = useRouter()
  const { query: { id } } = router

  return (
    <UserLayout i18n={i18n}>
      <Head>
        <title>
          Project Data:
          {id}
        </title>
      </Head>

      <ContactDetail id={id} token={token} authInfo={authInfo} />

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
}

UserProfile.getInitialProps = async (context) => {
  const { authInfo, token } = await isPassAuth(context)

  return {
    namespacesRequired: ['common'],
    authInfo,
    token,
  }
}


export default withTranslation('common')(UserProfile)
