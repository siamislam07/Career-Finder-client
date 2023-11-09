/* eslint-disable react/prop-types */

import axios from "axios";
import { useEffect, useState } from "react";

const AppliedJobsRow = ({ jobData, index }) => {
    const { name, title, salary, resume} = jobData
    console.log(jobData);
    return (
        <tr  >
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{title}</td>
            <td>{jobData.date[0]}</td>
            <td>{jobData.date[1]}</td>
            <td>{salary}</td>
            <td>{resume}</td>
            {/* <td>{resume}</td> */}
            
        </tr>
    );
};

export default AppliedJobsRow;