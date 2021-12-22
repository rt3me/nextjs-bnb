import React, { useState } from 'react';
import Head from 'next/head'
import houses from '../../houses';
import Layout from '../../components/Layout';
import DateRangePicker from '../../components/DateRangePicker';

export default function House(props) {
  const content = (
    <React.Fragment>
      <Head>
        <title>{props.house.title}</title>
      </Head>
      <div className="container">
        <article>
          <img src={props.house.picture} alt={props.house.title} width="100%" />

          <p>
            {props.house.type} - {props.house.town}
          </p>
          <p>{props.house.title}</p>
        </article>
        <aside>
          <h2>Choose a date</h2>
          <DateRangePicker
            datesChanged={(startDate, endDate) => {
              console.log(`startDate: ${startDate} endDate: ${endDate}`);
              setNumberOfNightsBetweenDates(
                calcNumberOfNightsBetweenDates(startDate, endDate)
              );
              setDateChosen(true);
            }}
          />
        </aside>
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 60% 40%;
          grid-gap: 30px;
        }

        aside {
          border: 1px solid #ccc;
          padding: 20px;
        }
      `}</style>
    </React.Fragment>
  )

  const calcNumberOfNightsBetweenDates = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let dayCount = 0;

    while (end > start) {
      dayCount++;
      start.setDate(start.getDate() + 1);
    }

    return dayCount;
  }

  const [dateChosen, setDateChosen] = useState(false);
  const [numberOfNightsBetweenDates, setNumberOfNightsBetweenDates] = useState(0);

  return <Layout content={content} />
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      house: houses.filter((house) => house.id === parseInt(id))[0],
    }
  };
}
