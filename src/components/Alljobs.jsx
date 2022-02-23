import React, { useEffect, useState } from "react";
import axios from "axios";

const Alljobs = () => {
    const [alljobs, setAlljobs] = useState();

    
    /* fetch('http://abiesrvgcs02/qs2.webapi/api/getalljobs/', {
    })
    .then(data => console.log(data)) */

    useEffect(() => {
        axios.get(`http://abiesrvgcs02/qs2.webapi/api/getalljobs/`).then((res) => {
            const responseAlljobs = res.data;
            setAlljobs(responseAlljobs);
        });
    }, []);

    console.log(alljobs);

    return (
        <p> This is Alljobs component</p>
    )
};

export default Alljobs;
