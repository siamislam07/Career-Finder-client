/* eslint-disable react/prop-types */

const AppliedJobsRow = ({ jobData, index, }) => {
    const { name, title, salary, } = jobData
    return (
        <tr  >
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{title}</td>
            <td>{jobData.dates[0]}</td>
            <td>{jobData.dates[1]}</td>
            <td>{salary}</td>
            
        </tr>
    );
};

export default AppliedJobsRow;