import React from 'react';
import './NotFound.css';
import {motion} from 'framer-motion'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='not-found-block'
    >
      <div className='not-found'>
        <h1 className='found-header'>404</h1>
        <div className='found-border'></div>
        <p>This page could not be found.</p>
      </div>
    </motion.div>
  );
};

export default NotFound;
