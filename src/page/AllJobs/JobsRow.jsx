/* eslint-disable react/prop-types */

const JobsRow = ({jobs, index, }) => {

    
    
    
    console.log(jobs);
    const {name, title, salary} = jobs

    return (
        <tr  >
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{title}</td>
            <td>{jobs.dates[0]}</td>
            <td>{jobs.dates[1]}</td>
            <td>{salary}</td>
            <td><span className="badge border-red-200 ">Details</span></td>
        </tr>
    );
};

export default JobsRow;