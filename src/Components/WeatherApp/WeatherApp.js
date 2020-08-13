import React, {useState, useEffect} from 'react';
import './WeatherApp.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import InfoCard from '../InfoCards/InfoCards';

function WeatherApp() {

    const [currentCity, setCurrentCity] = useState('New York');
    const [buttonClicked, setButtonClicked] = useState(false);
    const [currentTemperature, setCurrentTemperature] = useState('');
    const [cityWeatherInfo, setCityWeatherInfo]  = useState({});
    const [finalCity, setFinalCity] = useState('New York');
    const [country, setCountry] = useState('United States of America');

    const API_KEY = 'GET YOUR API FROM WEATHER STACK AND INSERT HERE (Removed for security purposes)';
    const CURRENT_URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${currentCity}`;

    useEffect(() => {
        async function loadData(){
            await fetch(CURRENT_URL)
            .then((response) => response.json())
            .then((data) => {
                setCurrentTemperature(data.current.temperature);
                setCountry(data.location.country);
                setCityWeatherInfo(data);
            })
        }
        loadData().catch((error) => {
            const ERROR = "YOU NEED API KEY";
            setCountry('Go to: weatherstack.com');
            setCurrentCity(ERROR);
            setFinalCity(ERROR);
        });

    },[buttonClicked])

    function setCity(e){
        setCurrentCity(e.target.value)
    }

    function searchData(){
        setButtonClicked(!buttonClicked)
        setFinalCity(currentCity)
        document.getElementById('citytext').value = '';
    }

    function searchDataOnEnter(e){
        if (e.keyCode === 13) {
            searchData()
        }
    }

    return (
        <div className = "app">
            <h1 className = "title">Dream Weather</h1>
            <div className  = "search-div">
                <input  id = "citytext" type = "text" placeholder = "Enter City" onChange = {setCity} onKeyUp = {searchDataOnEnter}></input>
                <button onClick = {searchData}>⇥</button>
            </div>
            <Card className = "city-card">
                <CardContent>
                    Currrent City: <h4>{finalCity}{' , '}{country}</h4>
                </CardContent>
            </Card>
           <InfoCard currentTemperature = {currentTemperature} cityWeatherInfo = {cityWeatherInfo}></InfoCard>
        </div>
    )
}

export default WeatherApp;
