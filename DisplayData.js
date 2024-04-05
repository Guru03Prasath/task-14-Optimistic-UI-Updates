import React from 'react';

const DisplayData = ({ data }) => {
  return (
    <div>
      {/* Display updated data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DisplayData;
