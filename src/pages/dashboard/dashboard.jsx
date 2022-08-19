//import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./dashboard.css"
import mockData from '../../services/mockData'
import KeyFigures from '../../components/keyFigures/keyFigures';
//import PropTypes from 'prop-types';


const Dashboard = () => {

    let { id } = useParams();
    let userId = parseInt(id);

    const userInfo = mockData.USER_MAIN_DATA.find((item) => item.id === userId );


    console.log(userInfo);

    return (
        <>
            <div className='container__header'>
            <h1 className='header__title'>
                Bonjour {''}
                <span className='header__title--color'>{userInfo.userInfos.firstName}</span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <aside className=''>
                <KeyFigures {...userInfo} />
            </aside>
        </>
    );
};

export default Dashboard;