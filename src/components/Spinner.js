import React, {useState, useEffect, Component} from 'react';
import Loading from './Loading';
import SpinnerContext from '../context/Spinner/SpinnerContext';

export default function Spinner ({component: Component, ...props})  {
    
    
    const [isLoading, setIsLoading] = useState(true);
  useEffect(async() => {
    await setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading])

  return(
    <div>
    {
        isLoading ?
      (<Loading/>)
      :
      (<Component/>)
    }
  </div>
);
  
}

