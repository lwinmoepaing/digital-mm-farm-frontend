/* eslint-disable react/prop-types */
import { Bar } from 'react-chartjs-2'

const options = {
  legend: {
    position: 'bottom',
    labels: {
      fontSize: 10,
      boxWidth: 10,
    },
    display: false,
  },
}

const Do = ({ project }) => {
  const data = {
    datasets: [{
      data: [
        project.totalPendingProjects,
        project.totalWorkingProjects,
        project.totalFinishedProjects,
        project.totalRejectProjects,
        project.totalExpiredProjects,
      ],
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgb(232, 232, 232, 0.2)',
      ],
      borderColor: [
        'rgba(255, 206, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgb(187, 187, 187, 1)',
      ],
      borderWidth: 1,
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Pending',
      'Working',
      'Finished',
      'Rejected',
      'Expired',
    ],
  }

  return (
    <div>
      <div
        className="DoContainer"
      >
        <Bar
          data={data}
          width={400}
          options={options}
        />
      </div>

      <style jsx>
        {`
			.DoContainer {
				padding: 1.5rem 1rem;
				border-radius: 1rem;
				background: #ffffff;
				box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
			}

			p {
				margin: 0;
				text-align: center;
			}
		`}
      </style>
    </div>
  )
}

export default Do
