import React from 'react';
import Header from '../../components/header/header'
import mockData from '../../services/mockData';
import Name from '../../components/name/name';
import './home.css'

const Home = () => (
	<div>
            <Header />
            <div className='home'>
                <h1>User :</h1>
                <div className='home__name'>
                    {mockData.USER_MAIN_DATA.map((user) => {
                        return <Name {...user} key={user.id} />
                    })}
                </div>
            </div>
    </div>
    )

export default Home;