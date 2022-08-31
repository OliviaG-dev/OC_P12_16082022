import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./dashboard.css";
import mockData from "../../services/mockData";
import KeyFigures from "../../components/keyFigures/keyFigures";
import { getUserInfo, getUserActivity, getUserAverage, getUserPerformance } from "../../services/api";
import DailyActivity from "../../components/dailyActivity/dailyActivity";
import SessionDuration from "../../components/sessionDuration/sessionDuration";
import TypeOfPerformance from "../../components/typeOfPerformance/typeOfPerformance";
import AverageScore from "../../components/averageScore/averageScore";



const Dashboard = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMockData, setIsMockData] = useState(true);
  const [dataUser, setDataUSer] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);
  const [dataSession, setDataSession] = useState([]);
  const [dataPerformance, setDataPerformance] = useState ([]);
  

  let { id } = useParams();
  let userId = parseInt(id);

  const userInfo = mockData.USER_MAIN_DATA.find((item) => item.id === userId);
  const userActivity = mockData.USER_ACTIVITY.find(
    (item) => item.userId === userId
  );
  const userSession = mockData.USER_AVERAGE_SESSIONS.find((item) => item.userId === userId);
  const userPerformance = mockData.USER_PERFORMANCE.find((item) => item.userId === userId)

  useEffect(() => {
    setLoading(true);

    //////**********DATA USER INFO**********/////
    const getDataUser = async () => {
      try {
        const request = await getUserInfo(id);
        console.log(request.data);
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

    //////**********DATA SESSION**********/////
    const getDataSession = async () => {
      try {
        const request = await getUserAverage(userId);
        setDataSession(request.data);
        setIsMockData(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDataSession();

    //////**********DATA PERFORMANCE**********/////
    const getDataPerformance = async () => {
      try {
        const request = await getUserPerformance(userId);
        setDataPerformance(request.data);
        setIsMockData(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDataPerformance();

  }, [id, userId]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="flex">
      {/* <div className="container__header">
        <h1 className="header__title">
          Bonjour {""}
          <span className="header__title--color">
            {isMockData
              ? userInfo?.userInfos?.firstName
              : dataUser.userInfos?.firstName}
          </span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div> */}

      <div className="dashboard">
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
        <section className="dashboard_stat">
          <article className="stat__dailyActivity">
            {isMockData ? (
              <DailyActivity {...userActivity} />
            ) : (
              <DailyActivity {...dataActivity} />
            )}
          </article>
          
          <article className="stat__charts">
            <div className="charts__sessionDuration">
            <div className="charts__sessionDuration__background"></div>
              {isMockData ? (
                <SessionDuration {...userSession}/>
              ) : (
                <SessionDuration {... dataSession}/>
              )
              }
            </div>
            <div className="charts__typeOfPerformance">
            {isMockData ? (
                <TypeOfPerformance {...userPerformance}/>
              ) : (
                <TypeOfPerformance {...dataPerformance}/>
              )
              }
            </div>
            <div className="charts__averageScore">
            {isMockData ? (
                <AverageScore scorePercent={userInfo.todayScore}/>
              ) : (
                <AverageScore scorePercent={dataUser.todayScore}/>
              )
              }
            </div>
          </article>
        </section>

        <section className="dashboard__keyFigures">
          {isMockData ? (
            <KeyFigures {...userInfo} />
          ) : (
            <KeyFigures {...dataUser} />
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
