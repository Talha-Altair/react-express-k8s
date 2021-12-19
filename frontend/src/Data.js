import React from 'react'

export default function Data({ data }) {


    if (data.length === 0) return <></>;

    let res = data.data

    return (
        <>
            <p>Name: {res.name}</p>
            <p>Username: {res.username}</p>
            <p>Email: {res.email}</p>
            <p>Phone: {res.phone}</p>
        </>
    )
}
