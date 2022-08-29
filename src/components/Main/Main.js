import React, { useEffect } from "react";
import covid from "../../assets/covid.png";
import "./Main.Module.css";
import { Chart, Series } from "devextreme-react/chart";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import CountUp from "react-countup";
import Country from "../Country/Country";
import { setCountryOneData } from "../../redux/covidSlice";

const Main = () => {
  const selectCountry = useSelector((state) => state.covid.selectCountry);
  const countryOneData = useSelector((state) => state.covid.countryOneData);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://covid19.mathdro.id/api/countries/${selectCountry}`)
      .then((res) => res.data)
      .then((data) => dispatch(setCountryOneData(data)));
  }, [dispatch, selectCountry]);

  const data2 = [
    {
      subject: "Infected",
      oranges: countryOneData && countryOneData.confirmed.value,
      color: "red",
    },
    {
      subject: "Recovered",
      oranges: countryOneData && countryOneData.recovered.value,
    },
    {
      subject: "Deaths",
      oranges: countryOneData && countryOneData.deaths.value,
    },
    {
      subject: "Active",
      oranges:
        countryOneData &&
        countryOneData.confirmed.value - countryOneData.deaths.value,
    },
  ];
  console.log(countryOneData);
  return (
    <div>
      <header>
        <div className="header-img">
          <img src={covid} alt="" />
        </div>
        <div className="header-text">
          <p>Global and Country Wise Cases of Corona Virus</p>
          <p>(For a Particular country, select a Country from below)</p>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="card color-1">
                <div className="card-body ">
                  <div className="card-text-1">Infected</div>
                  {countryOneData && (
                    <div className="card-text-2">
                      <CountUp
                        start={0}
                        end={countryOneData.confirmed.value}
                        separator="."
                      />
                    </div>
                  )}

                  <div className="card-text-3">Last Updated at:</div>
                  <div className="card-text-4">
                    {new Date(countryOneData.lastUpdate).toLocaleString()}
                  </div>
                  <div className="card-text-5">
                    Number of recoveries from COVID-19
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card color-2">
                <div className="card-body">
                  <div className="card-text-1">Recovered</div>
                  {countryOneData && (
                    <div className="card-text-2">
                      <CountUp
                        start={0}
                        end={countryOneData.recovered.value}
                        separator="."
                      />
                    </div>
                  )}

                  <div className="card-text-3">Last Updated at:</div>
                  <div className="card-text-4">
                    {new Date(countryOneData.lastUpdate).toLocaleString()}
                  </div>
                  <div className="card-text-5">
                    Number of recoveries from COVID-19
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card color-3">
                <div className="card-body">
                  <div className="card-text-1">Deaths</div>
                  {countryOneData && (
                    <div className="card-text-2">
                      <CountUp
                        start={0}
                        end={countryOneData.deaths.value}
                        separator="."
                      />
                    </div>
                  )}

                  <div className="card-text-3">Last Updated at:</div>
                  <div className="card-text-4">
                    {new Date(countryOneData.lastUpdate).toLocaleString()}
                  </div>
                  <div className="card-text-5">
                    Number of recoveries from COVID-19
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card color-4">
                <div className="card-body">
                  <div className="card-text-1">Active</div>
                  {countryOneData && (
                    <div className="card-text-2">
                      <CountUp
                        start={0}
                        end={
                          countryOneData.confirmed.value -
                          countryOneData.deaths.value
                        }
                        separator="."
                      />
                    </div>
                  )}
                  <div className="card-text-3">Last Updated at:</div>
                  <div className="card-text-4">
                    {new Date(countryOneData.lastUpdate).toLocaleString()}
                  </div>
                  <div className="card-text-5">
                    Number of recoveries from COVID-19
                  </div>
                </div>
              </div>
            </div>
          </div>

          <body>
            <div className="select">
              <Country />
            </div>
          </body>
          <div className="graphic-body">
            <Chart id="chart" dataSource={data2}>
              <Series
                valueField="oranges"
                argumentField="subject"
                type="bar"
                color="#576BFE"
              />
            </Chart>
          </div>
        </div>
      </main>
      <footer>
        <p className="footer-text">Created with care by Pyson✓</p>
      </footer>
    </div>
  );
};

export default Main;
