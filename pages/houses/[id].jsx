import Head from 'next/head'
import React from 'react';
import houses from '../../houses';
import Layout from '../../components/Layout';

export default function House(props) {
  return (
    <Layout content={
      <React.Fragment>
        <Head>
          <title>{props.house.title}</title>
        </Head>
        <img src={props.house.picture} alt={props.house.title} width="100%" />

        <p>
          {props.house.type} - {props.house.town}
        </p>
        <p>{props.house.title}</p>
      </React.Fragment>
    }/>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  return {
    props: {
      house: houses.filter((house) => house.id === parseInt(id))[0],
    }
  };
}
