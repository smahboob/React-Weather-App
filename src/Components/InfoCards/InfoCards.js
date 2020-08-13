import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }

function InfoCards({currentTemperature,cityWeatherInfo}) {
    return (
        <div>
             <div className = "cards-div">

                <Card className = "card">
                    <CardContent>
                        <Typography>Humidity</Typography>
                        <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.humidity + '%' : "Loading"}</h2>
                    </CardContent>
                </Card>

                <Card className = "card">
                    <CardContent>
                        <Typography>Temperature</Typography>
                        <h2>{currentTemperature} {'\xB0C'}</h2>
                    </CardContent>
                </Card>

                <Card className = "card">
                    <CardContent>
                        <Typography>Feels Like</Typography>
                        <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.feelslike + '\xB0C': "Loading"}</h2>
                    </CardContent>
                </Card>

                </div>


            <div className = "cards-div">

                <Card className = "card2">
                    <CardContent>
                        <Typography>Wind Speed</Typography>
                        <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.wind_speed + ' km/h': "Loading"}</h2>
                    </CardContent>
                </Card>

                <Card className = "card2">
                    <CardContent>
                        <Typography>Wind Degree</Typography>
                        <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.wind_degree + '\u00B0' : "Loading"}</h2>
                    </CardContent>
                </Card>

                <Card className = "card2">
                    <CardContent>
                        <Typography>Wind Direction</Typography>
                        <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.wind_dir : "Loading"}</h2>
                    </CardContent>
                </Card>

            </div>


            <div className = "cards-div">

                <Card className = "card3">
                <CardContent>
                    <Typography>Precipitation</Typography>
                    <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.precip + ' %': "Loading"}</h2>
                </CardContent>
                </Card>

                <Card className = "card3">
                <CardContent>
                    <Typography>Uv-Index</Typography>
                    <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.uv_index : "Loading"}</h2>
                </CardContent>
                </Card>

                <Card className = "card3">
                <CardContent>
                    <Typography>Visibility</Typography>
                    <h2>{!isEmpty(cityWeatherInfo) ? cityWeatherInfo.current.visibility + ' miles': "Loading"}</h2>
                </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default InfoCards;