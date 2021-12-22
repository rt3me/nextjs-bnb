import React, { useState } from 'react';
import Header from './Header';
import Modal from './Modal';

export default function Layout(props) {
  const [showModal, setShowModal] = useState(true);

  return (
    <React.Fragment>
      <Header />
      <main>{props.content}</main>

      {showModal && <Modal close={() => setShowModal(false)}>test</Modal>}

      <style jsx>{`
        main {
          position: relative;
          max-width: 56em;
          background-color: white;
          padding: 2em;
          margin: 0 auto;
          box-sizing: border-box;
        }
      `}</style>
    </React.Fragment>
  );
}