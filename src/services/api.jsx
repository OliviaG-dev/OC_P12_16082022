import mockData from "./mockData";

const mockedEnv = false;
//process.env.REACT_APP_IS_DATA_MOCK;

const getUserInfo = async (id) => {
  if (mockedEnv) {
    return mockData.USER_MAIN_DATA.find((item) => item.userId === id);
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const data = await response.json();
      if (data.data.todayScore === undefined)
        data.data.todayScore = data.data.score;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

const getUserPerformance = async (id) => {
  if (mockedEnv) {
    return mockData.USER_PERFORMANCE.find((item) => item.userId === id);
  } else {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${id}/performance`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

const getUserActivity = async (id) => {
  if (mockedEnv) {
    return mockData.USER_ACTIVITY.find((item) => item.userId === id);
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

const getUserAverage = async (id) => {
  if (mockedEnv) {
    return mockData.USER_AVERAGE_SESSIONS.find((item) => item.userId === id);
  } else {
    try {
      const response = await fetch(
        `http://localhost:3000/user/${id}/average-sessions`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};

export { getUserInfo, getUserPerformance, getUserActivity, getUserAverage };
