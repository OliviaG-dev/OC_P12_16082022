const getUserInfo = async (id) => {
  const response = await fetch(`http://localhost:3000/user/${id}`);
  const data = await response.json();
  return data;
};

const getUserPerformance = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/user/${id}/performance`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserActivity = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}/activity`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUserAverage = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}/average`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getUserInfo, getUserPerformance, getUserActivity, getUserAverage };
