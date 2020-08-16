import React, { useEffect, useState } from 'react'
import { db } from './firebase';

export default function Protected() {
    const [info, setInfo] = useState([])

    useEffect(() => {
        db.collection("posts")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data);
                setInfo(data);
            });
    }, [])



    return (
        <>
            {info.map((info, i) => (
                <div key={i}>
                    <h1>{info.title}</h1>
                    <h1>{info.post}</h1>
                </div>
            ))}
        </>

    )
}
