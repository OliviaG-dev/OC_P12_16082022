import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./dashboard.css";
import KeyFigures from "../../components/keyFigures/keyFigures";
import {
  getUserInfo,
  getUserActivity,
  getUserAverage,
  getUserPerformance,
} from "../../services/api";
import DailyActivity from "../../components/dailyActivity/dailyActivity";
import SessionDuration from "../../components/sessionDuration/sessionDuration";
import TypeOfPerformance from "../../components/typeOfPerformance/typeOfPerformance";
import AverageScore from "../../components/averageScore/averageScore";

const Dashboard = () => {
  const [dataUser, setDataUSer] = useState([]);
  const [dataActivity, setDataActivity] = useState([]);
  const [dataSession, setDataSession] = useState([]);
  const [dataPerformance, setDataPerformance] = useState([]);

  let { id } = useParams();
  let userId = parseInt(id);

  useEffect(() => {
    const getDataUser = async () => {
      const request = await getUserInfo(id);
      setDataUSer(request.data);
    };
    getDataUser();

    const getDataActivity = async () => {
      const request = await getUserActivity(userId);
      setDataActivity(request.data);
    };
    getDataActivity();

    const getDataSession = async () => {
      const request = await getUserAverage(userId);
      setDataSession(request.data);
    };
    getDataSession();

    const getDataPerformance = async () => {
      const request = await getUserPerformance(userId);
      setDataPerformance(request.data);
    };
    getDataPerformance();
  }, [id, userId]);

  return (
    <>
      <div className="dashboard">
        <div className="container__header">
          <h1 className="header__title">
            Bonjour {""}
            <span className="header__title--color">
              {dataUser.userInfos?.firstName}
            </span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <section className="dashboard_stat">
          <article className="stat__dailyActivity">
            <DailyActivity activityData={dataActivity.sessions} />
          </article>

          <article className="stat__charts">
            <div className="charts__sessionDuration">
              <div className="charts__sessionDuration__background"></div>
              <SessionDuration averageData={dataSession.sessions} />
            </div>

            <div className="charts__typeOfPerformance">
              <TypeOfPerformance performanceData={dataPerformance.data} />
            </div>

            <div className="charts__averageScore">
              <AverageScore scorePercent={dataUser.todayScore} />
            </div>
          </article>
        </section>

        <section className="dashboard__keyFigures">
          <KeyFigures figureData={dataUser.keyData} />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
