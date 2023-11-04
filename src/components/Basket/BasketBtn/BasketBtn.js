import React, { useEffect, useState } from 'react'
import "./BasketBtn.css"
import { Link, useParams } from 'react-router-dom'

const BasketBtn = ({ count }) => {

    return (
        <Link to={"/basket"}>
            <div className='basketBtn'>
                <div className='basketBtn-icon'></div>
                <div className='basketBtn-count'>{count}</div>
            </div>
        </Link>
    )
}

export default BasketBtn