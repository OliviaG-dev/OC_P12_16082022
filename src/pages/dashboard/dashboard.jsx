//import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import "./dashboard.css"
import Header from "../../components/header/header"
import VerticalBar from "../../components/verticalBar/verticalBar"
//import { getUserInfo } from "../../services/api";
//import PropTypes from 'prop-types';


const Dashboard = () => {

    //const [data, setData] = useState([])
    //const [score, setScore] = useState([])
    //const { id } = useParams()
    //console.log(getUserInfo);
    //console.log(id);
  
    return (
        <>
        <Header />
        <VerticalBar />
        </>
    );
  };
  
  export default Dashboard;