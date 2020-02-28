/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import QRCode from 'qrcode.react'
import { BASE_API_URL } from '../../../../config'
import TwoTreeLoading from '../../Common/SVG/TwoTreeLoading'
import FileUpload from '../../Common/Upload/FileUpload'
import CreatedBy from '../../Common/Profile/CreatedBy'
import SomethingWrong from '../../Common/Profile/SomethingWrong'


const ProjectDetail = ({ id, token }) => {
  const [isLoading, setLoading] = useState(true)
  const [project, setProject] = useState(null)
  const [isError, setError] = useState(true)

  const fetchData = async () => {
    const url = `${BASE_API_URL}/api/v1/project/${id}`

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })

      if (!res.ok) {
        throw new Error(res)
      }
      const { data } = await res.json()
      setProject(data)
      setLoading(false)
      setError(false)
    } catch (e) {
      setProject(null)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])


  const Loading = ({ type }) => (
    <div className="LoadingContainer">
      <TwoTreeLoading style={{ width: type === 'sm' ? 100 : 300 }} />
      <div>
        Loading ...
      </div>
      <style jsx>
        {`
					.LoadingContainer {
						text-align: center;
					}
				`}
      </style>
    </div>
  )

  const MyQrCode = () => (
    <div className="Container font-en">
      <h3 className="text-center">
        QrCode
      </h3>
      <div className="text-center pb-1">
        <QRCode value={id} fgColor="#47e847" level="M" bgColor="#ffffff" />
      </div>
      <style jsx>
        {`
					.Container {
						border-radius: 1rem;
						padding: .5rem;
						background: #ffffff;
						margin-bottom: 1rem;
					}

					.text-center {
						text-align: center
					}

					.pb-1 {
						padding-bottom: 1rem
					}
				`}
      </style>
    </div>
  )

  const ImageContainer = () => (
    <div
      className="Container height"
      style={{
        backgroundImage: project !== null ? project.headImg : '',
      }}
    >
      <img className="img" src={BASE_API_URL + project.headImg} alt="Project Data" />
      <style jsx>
        {`
					.Container {
						border-radius: 1rem;
						overflow: hidden;
						background: #fff;
						background-size: cover;
						background-position: center center;
						position: relative;
						margin-bottom: 1rem;
					}

					.height {
						height: 190px;
					}

					.img {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						object-fit: cover;
						object-position: center center;
					}
			`}

      </style>
    </div>
  )


  const TextEditor = ({ profile }) => (
    <div className="Container">


      <style jsx>
        {`
					.Container {
							border-radius: 1rem;
							padding: 1rem;
							background: #fff;
							background-size: cover;
							background-position: center center;
						}
				`}
      </style>
    </div>
  )
  const _setImage = (img) => {
    setProject({
      ...project,
      headImg: img,
    })
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 14 }} md={{ span: 18 }}>
          { !isLoading && isError && <SomethingWrong />}

          { isLoading && <div className="Container"><Loading /></div>}
          { isLoading && <div className="Container"><Loading /></div>}

          { !isLoading && !isError && <FileUpload token={token} id={id} setImage={_setImage} />}
          { !isLoading && !isError && <ImageContainer />}
          { !isLoading && !isError && <TextEditor profile={project.user} />}

        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 6 }}>
          { isLoading && <div className="Container min-height-220"><Loading type="sm" /></div>}
          { isLoading && <div className="Container min-height-220"><Loading type="sm" /></div>}

          { !isLoading && !isError && <MyQrCode /> }
          { !isLoading && !isError && <CreatedBy profile={project.user} /> }
        </Col>
      </Row>

      <style jsx>
        {`
					.Container {
						border-radius: 1rem;
						padding: .5rem;
						background: #fff;
						background-size: cover;
						background-position: center center;
						margin-bottom: 1rem;
					}

					.min-height-220 {
						min-height: 220px;
					}

					.text-center {
						text-align: center
					}

					.pb-1 {
						padding-bottom: 1rem
					}
				`}
      </style>
    </div>
  )
}
export default ProjectDetail