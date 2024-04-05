import React, { useState } from 'react';
import DisplayData from './DisplayData';
import { optimisticUpdate, serverRequest } from './api';

const OptimisticUIComponent = () => {
  const initialData = {}; // Define your initial data structure
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      // Optimistically update UI
      const newData = optimisticUpdate(data);
      setData(newData);

      // Make server request
      await serverRequest(newData);

      // Server request successful
      setIsLoading(false);
    } catch (error) {
      // Revert changes on server request failure
      setIsLoading(false);
      setData(initialData);
      console.error('Server request failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Update Data'}
      </button>
      <DisplayData data={data} />
    </div>
  );
};

export default OptimisticUIComponent;
