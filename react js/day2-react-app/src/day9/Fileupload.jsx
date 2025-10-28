import React, { useRef } from 'react'

export const Fileupload = () => {
    const clickRef=useRef(null);

    const click=()=>{
        clickRef.current.click();
    }
    const filedata=(e)=>{
        const file=e.target.files[0];
        console.log(file.name)
        // if(file.name){
        //     console.log(file.name);
        // }
    }

  return (
    <div>
        <input type="file" ref={clickRef} onChange={filedata}  style={{display:"none"}}/>
        <button onClick={click}>upload</button>

    </div>
  )
}
