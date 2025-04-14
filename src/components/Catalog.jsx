
import React from 'react';
import talks from '../talks/talks.jsx'

export default function Catalog(){
  return (
    <div style={styles.catalog}>
      <h1>My Talks</h1>
      {talks.map((talk) => (
        <div key={talk.id} style={styles.talkCard}>
          <h2><a href={`/${talk.id}`}>{talk.title}</a></h2>
          <h3>{talk.subtitle}</h3>
          <p>{talk.description}</p>
          <p>{new Date(talk.date).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  catalog: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  talkCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',

  },
};