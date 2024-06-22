import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchWeatherData } from '../services/api';
import LineChartComponent from './LineChart';
import BarChartComponent from './BarChart';
import Dropdown from './Dropdown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ChartContainer = () => {
  const [data, setData] = useState([]);
  const [selectedCity, setSelectedCity] = useState('London');
  const [cityOptions, setCityOptions] = useState([
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Kerala', value: 'Kerala' },
   
    { label: 'Maharastra', value: 'Maharastra' }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchWeatherData(selectedCity);
        setData(result);
        console.log(result)
        setLoading(false);
      } catch (error) {
        console.error('Network error:', error.message);
        setError('Failed to fetch data. Please check your network connection.');
        setLoading(false);
      }
    };
    getData();
  }, [selectedCity]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <Dropdown
        options={cityOptions}
        selected={selectedCity}
        onChange={setSelectedCity}
      />
      <LineChartComponent data={data} />
      <BarChartComponent data={data} />
    </Container>
  );
};

export default ChartContainer;
