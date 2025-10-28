import React, { useState } from 'react'
import './modelscreen.css'

export const ModelScreen = () => {
    const [showModel, setShowModel] = useState(false)

    const openModel = () => {
        setShowModel(true)
    }
    const closeModel = () => {
        setShowModel(false)
    }

    return (
        <>
            <button onClick={openModel}>open screen</button>

            {showModel && (
                <div className='model'>
                    <div className='modelScreen'>
                        <h1>hello this is a ModelScreen</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, provident?</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <button onClick={closeModel}>close screen</button>
                    </div>
                </div>
            )}

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit natus, ducimus dolores deserunt deleniti aut quas ullam esse nam impedit accusamus dolorem unde blanditiis saepe expedita quasi laborum, molestias repellat?</p>
        </>
    )
}
