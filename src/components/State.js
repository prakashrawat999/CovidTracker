import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const State = () => {

  const [data, setData] = useState([]);
  const [boxdata, setBoxData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setData(actualData.statewise);
    setBoxData(actualData.statewise[0]);
  }

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className='container-fluid mt-3'>
        <div className='main-heading' style={{textAlign: "center"}}>
          <h1 className='mb-4'><span className='font-weight-bold'>INDIA COVID-19 Dashboard Tracker</span></h1>
        </div>

        <div className='m-3 mr-3'>
          <CardGroup>
            <Card border="dark" style={{ width: '18rem' }} className='bg-dark text-white'>
              <Card.Header>Total Confirmed</Card.Header>
              <Card.Body>
                <Card.Title>{boxdata.confirmed}</Card.Title>
              </Card.Body>
            </Card>
            <Card border="light" style={{ width: '18rem' }} className='bg-light font-size-bold'>
              <Card.Header>Our Country</Card.Header>
              <Card.Body>
                <Card.Title><h2>INDIA</h2></Card.Title>
              </Card.Body>
            </Card>
            <Card border="success" style={{ width: '18rem' }} className='bg-success text-white'>
              <Card.Header>Total Recoverd</Card.Header>
              <Card.Body>
                <Card.Title>{boxdata.recovered}</Card.Title>
              </Card.Body>
            </Card>
            <Card border="danger" style={{ width: '18rem' }} className='bg-danger text-white'>
              <Card.Header>Total Deaths</Card.Header>
              <Card.Body>
                <Card.Title>{boxdata.deaths}</Card.Title>
              </Card.Body>
            </Card>
            <Card border="warning" style={{ width: '18rem' }} className='bg-warning text-white'>
              <Card.Header>Total Active</Card.Header>
              <Card.Body>
                <Card.Title>{boxdata.active}</Card.Title>
              </Card.Body>
            </Card>
            <Card border="primary" style={{ width: '18rem' }} className='bg-primary text-white'>
              <Card.Header>Total Updated</Card.Header>
              <Card.Body>
                <Card.Title>{boxdata.lastupdatedtime}</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>

        <div className='table-responsive'>
          <Table striped bordered hover variant="dark">
            <thead className='thead-dark'>
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((curElem, index) => {
                  return (
                    <tr key={index}>
                      <th>{curElem.state}</th>
                      <th>{curElem.confirmed}</th>
                      <th>{curElem.recovered}</th>
                      <th>{curElem.deaths}</th>
                      <th>{curElem.active}</th>
                      <th>{curElem.lastupdatedtime}</th>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

export default State