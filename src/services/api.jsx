//let isDataApi = false

const getUserInfo = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/user/${id}`);
    const data = await response.json();
    if (data.data.todayScore === undefined)
      data.data.todayScore = data.data.score;
    return data;
  } catch (error) {
    console.log(error);
  }
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
    const response = await fetch(
      `http://localhost:3000/user/${id}/average-sessions`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getUserInfo, getUserPerformance, getUserActivity, getUserAverage };
