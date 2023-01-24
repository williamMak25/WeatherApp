import React from 'react'

type statusProps = {
    status: 'Loading' | 'success' | 'error'
}

export const Status = (props:statusProps) => {

  let message;
  if(props.status === 'Loading'){
    message = "Loading Your data";
  }else if(props.status === 'success'){
    message = 'Your data is ready';
  }else if(props.status === 'error'){
    message = 'Your data fetching is fail'
  }
  return(
    <div>
        <h2> Status - {message}</h2>
    </div>
  )
}
