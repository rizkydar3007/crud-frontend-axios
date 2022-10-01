import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    const [category, setCategory] = useState([]);
    useEffect(() => {
      axios
        .get("https://seemly-business-production.up.railway.app/api/v1/category/"+id)
        .then((res) => setCategory(res.data.data[0]))
        .catch((err) => console.log(err));
    }, [id]);
    return (
    <div>
      <ul>
        <li>Data :</li>
        <li>ID : {category.id}</li>
        <li>Name : {category.name}</li>
      </ul>
    </div>
  )
}

export default Detail