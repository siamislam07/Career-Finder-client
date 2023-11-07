/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const JobsRow = ({jobs, index, }) => {

    
    
    
    console.log(jobs);
    const {name, title, salary, _id} = jobs

    return (
        <tr  >
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{title}</td>
            <td>{jobs.dates[0]}</td>
            <td>{jobs.dates[1]}</td>
            <td>{salary}</td>
            <td><Link to={`/details/${_id}`} className="badge border-red-200 ">Details</Link></td>
        </tr>
    );
};

export default JobsRow;