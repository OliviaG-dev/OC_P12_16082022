import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./dashboard.css";
import mockData from "../../services/mockData";
import KeyFigures from "../../components/keyFigures/keyFigures";
import { getUserInfo, getUserActivity } from "../../services/api";
import DailyActivity from "../../components/dailyActivity/dailyActivity";
//import PropTypes from 'prop-types';

const Dashboard = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMockData, setIsMockData] = useState(true);
  const [dataUser, setDataUSer] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);
  
  let { id } = useParams();
  let userId = parseInt(id);
  
  const userInfo = mockData.USER_MAIN_DATA.find((item) => item.id === userId);
  const userActivity = mockData.USER_ACTIVITY.find(
    (item) => item.userId === userId
  );

  useEffect(() => {
    setLoading(true);

     //////**********DATA USER INFO**********/////
    const getDataUser = async () => {
      try {
        const request = await getUserInfo(id);
        setDataUSer(request.data);
        setIsMockData(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDataUser();
    
     //////**********DATA ACTIVITY**********/////
    const getDataActivity = async () => {
      try {
        const request = await getUserActivity(userId);
        setDataActivity(request.data);
        setIsMockData(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDataActivity();

  }, [id, userId]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    console.log(error);
  }
  
  console.log("mock", userActivity);
  console.log("data", dataActivity);

  return (
    <>
      <div className="container__header">
        <h1 className="header__title">
          Bonjour {""}
          <span className="header__title--color">
            {isMockData
              ? userInfo?.userInfos?.firstName
              : dataUser.userInfos?.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="dashboard">
        <div className="dashboard__dailyActivity">
          {isMockData ? (
            <DailyActivity {...userActivity} />
          ) : (
            <DailyActivity {...dataActivity} />
          )}
        </div>

        <aside className="dashboard__keyFigures">
          {isMockData ? (
            <KeyFigures {...userInfo} />
          ) : (
            <KeyFigures {...dataUser} />
          )}
        </aside>
      </div>
    </>
  );
};

export default Dashboard;
