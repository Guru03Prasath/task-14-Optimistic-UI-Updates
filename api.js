export const optimisticUpdate = (data) => {
  // Perform optimistic update
  const newData = { ...data, /* update data */ };
  return newData;
};

export const serverRequest = async (data) => {
  // Simulate server request delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulate server request success/failure
  const isSuccess = Math.random() < 0.8; // 80% chance of success
  if (!isSuccess) {
    throw new Error('Server request failed');
  }

  // Simulate server update
  console.log('Data successfully updated on the server:', data);
};
