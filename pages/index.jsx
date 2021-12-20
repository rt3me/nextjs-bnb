import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import houses from '../houses.js';
import House from '../components/House';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h2>Places to stay</h2>

      <div className="houses">
        {
          houses.map((house, index) => {
            return <House key={index} {...house} />
          })
        }
      </div>

      <style jsx>{`
        .houses {
          display: grid;
          grid-template-columns: 49% 49%;
          grid-template-rows: 300px 300px;
          grid-gap: 2%;
        }
      `}</style>
    </div>
  );
}
