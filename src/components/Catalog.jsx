
import React from 'react';
import talks from '../talks/talks.jsx'
import '../styles/Catalog.scss'

export default function Catalog(){
  return (
    <div className='talk-catalog'>
      <h1>My Talks</h1>
      {talks.map((talk) => (
        
      <div key={talk.id} className='talk-card'>
        <a key={talk.id} href={`/${talk.id}`} className='talk-link'>
          
          <div className="header" style={{
            backgroundImage: `url(${talk.background})`,
          }}></div>
          <div className="content">
            <h2>{talk.title}</h2>
            <h3>{talk.subtitle}</h3>
            <p>{talk.description}</p>
            <p>{new Date(talk.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</p>
          </div>
          </a>
        </div>
      ))}
    </div>
  );
};
