import React from 'react'
import '../../../App.css'


const Loading = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '1000px' }}>


                <div className="lds-roller text-center 100vh "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </>
    )
}

export default Loading