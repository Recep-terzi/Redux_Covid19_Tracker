import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCountryData, setSelectCountry } from "../../redux/covidSlice";
const Country = () => {
  const countryData = useSelector((state) => state.covid.countryData);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api/countries")
      .then((res) => res.data.countries)
      .then((data) => dispatch(setCountryData(data)));
  }, [dispatch]);
  return (
    <select onChange={(e) => dispatch(setSelectCountry(e.target.value))}>
      {countryData.map((data) => (
        <option value={data.name} key={data.name}>
          {data.name}
        </option>
      ))}
    </select>
  );
};

export default Country;
