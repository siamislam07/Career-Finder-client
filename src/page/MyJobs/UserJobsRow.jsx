/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const UserJobsRow = ({ jobData, index, handleDelete }) => {
    const { name, title, salary, _id} = jobData
    

    

    return (
        <tr  >
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{title}</td>
            <td>{jobData.dates[0]}</td>
            <td>{jobData.dates[1]}</td>
            <td>{salary}</td>
            <td>
                <span onClick={()=> handleDelete(_id)} className="badge border-red-200 mr-1 cursor-pointer">Delete</span>
                <Link to={`/update/${_id}`}><span  className="badge border-red-200 ">Update</span></Link>
            </td>
        </tr>
    );
};

export default UserJobsRow;