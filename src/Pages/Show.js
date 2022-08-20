/*eslint-disable*/
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const reducer = (prevState, action) => {
    switch(action.type) {

        case 'FETCH_SUCCESS': {
            return {...prevState, isLoading: false, error: null, show:action.show};
        }

        case 'FETCH_FAILED':{
            return {...prevState, isLoading: false, error:action.error};
        }

        default:return prevState
}
}


const initialState = {
    show:null,
    isLoading:true,
    error:null
};

const Show = () => {
  const { id } = useParams();

 const[{show, isLoading, error}, dispatch]= useReducer(reducer, initialState); 

  useEffect(() => {
    let isMounted = true;

    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {

            dispatch({ type: 'FETCH_SUCCESS', show:results })

        }
      })
      .catch(err => {
        if (isMounted) {
         
          setIsLoading(false);dispatch({ type: 'FETCH_FAILED', error: err.message })
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>Data is being loaded</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return <div>this is a show page</div>;
};

export default Show;