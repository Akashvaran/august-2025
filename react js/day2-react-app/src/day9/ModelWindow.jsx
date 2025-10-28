import React, { useRef } from 'react'

export const ModelWindow = () => {
    const windowRef=useRef(null)

    const openRef=()=>{
        windowRef.current.showModal()
    }

    const closeRef=()=>{
         windowRef.current.close();
    }
  return (
    <>
        {/* <button onClick={()=>openRef()}>open window</button> */}
        <button onClick={openRef}>open window</button>

        <dialog ref={windowRef}>
            <h1>hello this is a dialog</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, aperiam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing </p>

            <button onClick={closeRef}>close window</button>
        </dialog>


    </>
  )
}
