import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import houses from '../houses.js';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h2>Places to stay</h2>

      <div className="houses">
        {houses.map((house, index) => {
          //...
        })}
      </div>
    </div>
  );
}
