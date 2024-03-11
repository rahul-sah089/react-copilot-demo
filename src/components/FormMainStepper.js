import React, { useState } from 'react';
import Header from './Header';
import { Carousel, Radio } from 'antd';
import FormComponent from './Form';
const contentStyle = {
  height: '100vh',
  color: '#000',
  lineHeight: '160px',
  textAlign: 'center',
  padding: '20px',
  background: '#ecebe5',
};

const FormMainStepper = ({ handleFormSubmit }) => {
    const [dotPosition, setDotPosition] = useState('top');

    return (<>
        <Header />
        <>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>
            <FormComponent handleFormSubmit={handleFormSubmit} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
    </>)
};

export default FormMainStepper;