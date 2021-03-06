/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import { useEffect, useState, memo } from 'react'
import { Row, Col } from 'antd'
import { BASE_API_URL } from '../../../../config'
import CreatedByForStaff from '../../Common/Profile/CreatedByForStaff'
import SomethingWrong from '../../Common/Profile/SomethingWrong'
import StaffContactEditor from '../../Common/Editor/StaffContactEditor'
import EditorLoading from '../../Common/Editor/EditorLoading'
import EditorQRCode from '../../Common/Editor/EditorQrCode'


const ContactDetail = ({ id, token, authInfo }) => {
  const [isLoading, setLoading] = useState(true)
  const [project, setProject] = useState(null)
  const [isError, setError] = useState(false)
  // Edit Project
  const [isEdit, setIsEdit] = useState(false)

  const fetchData = async () => {
    if (project === null) {
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
        setLoading(false)
        setProject(data)
      } catch (e) {
        setProject(null)
        setLoading(false)
        setError(true)
      }
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  const ImageContainer = () => {
    const style = project.status === 'Pending' ? {
      background: '#f9dca8',
    } : project.status === 'Reject' ? {
      background: '#ff9a9a',
    } : project.status === 'Expired' ? {
      background: '#dfdfdf',
    } : project.status === 'Working' ? {
      background: '#00effb',
    } : {
      background: '#53fb48',
    }
    return (
      <div
        className="Container height"
        style={{
          backgroundImage: project !== null ? project.headImg : '',
        }}
      >
        <img className="img" src={BASE_API_URL + project.headImg} alt="Project Data" />
        <span className="status" style={style}>
          { project.status }
        </span>
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

					.status {
						position: absolute;
						z-index: 10;
						background: #fff;
						display: inline-block;
						padding: 4px .5rem;
						border-radius: 1rem;
						bottom: .3rem;
						left: .2rem;
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
  }


  const _setParentProjectUpdate = (payload) => {
    setProject({
      ...project,
      ...payload,
    })
  }

  const _toggleEdit = (boolean) => {
    setIsEdit(boolean)
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 14 }} md={{ span: 18 }}>
          { isLoading === false && isError === true && <SomethingWrong />}

          { isLoading === true && <div className="Container"><EditorLoading type="xs" /></div>}
          { isLoading === true && <div className="Container"><EditorLoading /></div>}
          { isLoading === true && <div className="Container"><EditorLoading /></div>}

          { isLoading === false && project !== null && <ImageContainer />}
          { isLoading === false && project !== null && (
          <StaffContactEditor
            project={project}
            isEdit={isEdit}
            toggleEdit={_toggleEdit}
            token={token}
            setParentProject={_setParentProjectUpdate}
            authInfo={authInfo}
          />
          )}

        </Col>

        <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 6 }}>
          { isLoading === true && <div className="Container min-height-220"><EditorLoading type="sm" /></div>}
          { isLoading === true && <div className="Container min-height-220"><EditorLoading type="sm" /></div>}
          { isLoading === false && project !== null && <EditorQRCode id={id} /> }
          { isLoading === false && project !== null && <CreatedByForStaff profile={project.user} title="Created" /> }
          { isLoading === false && project !== null && project.acceptedBy && <CreatedByForStaff profile={project.acceptedBy} title="Accepted" /> }
          { isLoading === false && project !== null && project.assignedBy && <CreatedByForStaff profile={project.assignedBy} title="Assigned" /> }
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
export default memo(ContactDetail)
