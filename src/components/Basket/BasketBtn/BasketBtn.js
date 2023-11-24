import React, { useEffect, useState } from 'react'
import "./BasketBtn.css"
import { Link, useParams } from 'react-router-dom'

export const BasketBtn = ({ basket }) => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        const totalCount = basket.length;
        setCount(totalCount);
    }, [basket]);


    return (
        <Link to={"/basket"}>
            <div className='basketBtn'>
                <div className='basketBtn-icon'></div>
                <div className='basketBtn-count'>{count}</div>
            </div>
        </Link>
    )
}
