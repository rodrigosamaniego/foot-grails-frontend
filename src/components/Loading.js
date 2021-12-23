import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Loading = () => {
   return (
        <>
        <div align='center'>
            <Loader
                type="Rings"
                color="black"
                height={300}
                width={300}
                timeout={2000} 
            />
        </div>
        
        </>
        
    )
}

export default Loading