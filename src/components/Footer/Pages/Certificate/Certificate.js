import React from 'react';
import { motion } from 'framer-motion';

const Certificate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='block'
    >
      <h1 className='title-header'>Сертификаты</h1>
      <div className='company-block'>
        <img
          width={600}
          src='https://marso.su/upload/medialibrary/132/3rkmfg0n8f4hr4l04mqpcrh4w7lmoa22.jpg'
        />
        <hr />
        <img
          width={600}
          src='https://marso.su/upload/medialibrary/8aa/i99qrxnkwxb1d30uca5dnf8lk2tfxwyv.jpg'
        />
        <hr />
        <img
          width={600}
          src='https://marso.su/upload/medialibrary/8dc/dq6no0unhnh2ox8rdwnq1iiyt7r444bd.jpg'
        />
        <hr />
        <img
          width={600}
          src='https://marso.su/upload/medialibrary/b37/ydrdk31w9xs4mj01q6sa6d3ppv4373ui.jpg'
        />
        <hr />
        <img width={600} src='https://marso.su/upload/cert5.jpg' />
      </div>
    </motion.div>
  );
};

export default Certificate;
