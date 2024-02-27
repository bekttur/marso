import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='block'
    >
      <h1 className='title-header'>О компании</h1>
      <div className='company-block'>
        <p>
          Компания <b style={{color: '#00A396'}} >Stratton</b> - цифровая компания с компетенциями в
          роботизации бизнес-процессов, разработке чат-ботов и сайтов для
          предпринимателей и их клиентов.
        </p>
        <p className='company-text'>
          За первые 3 года существования компании выполнено{' '}
          <b style={{ color: '#00A396' }}>70+ </b>средних и крупных проектов.
        </p>
        <p className='company-text'>
          <b
            style={{
              color: '#00A396',
              fontWeight: 600,
            }}
          >
            Нам доверяют
          </b>
        </p>
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 100,
            margin: '30px 0',
          }}
        >
          <div>
            <img width={150} src='/logo/kinderStore.webp' />
          </div>
          <div>
            <img width={200} src='/logo/qr.png' />
          </div>
        </div>
        <p className='company-text'>
          <b
            style={{
              color: '#00A396',
              fontWeight: 600,
            }}
          >
            Миссия
          </b>
        </p>
        <p className='company-text'>
          Помогать бизнесу в улучшении пользовательского опыта.
        </p>
        <p className='company-text'>
          <b
            style={{
              color: '#00A396',
              fontWeight: 600,
            }}
          >
            Видение
          </b>
        </p>
        <p className='company-text'>Быть частью каждого бизнеса в Казахстане</p>
        <p className='company-text'>
          <b
            style={{
              color: '#00A396',
              fontWeight: 600,
            }}
          >
            Ценности
          </b>
        </p>
        <li className='company-text'>
          Интеграция и партнерство: Компания стремится стать неотъемлемой частью
          каждого бизнеса в Казахстане, предлагая инновационные решения и
          устанавливая долгосрочные партнерские отношения.
        </li>
        <li className='company-text'>
          Экспертиза и консультации: Предоставление компетентных консультаций и
          экспертной поддержки по улучшению пользовательского опыта, основанных
          на глубоком понимании требований рынка и лучших практиках.
        </li>
        <li className='company-text'>
          Инновации и технологии: Предложение передовых технологических решений
          и инновационных подходов к улучшению пользовательского опыта, в том
          числе разработка чат-ботов, сайтов и других цифровых платформ.
        </li>
        <li className='company-text'>
          Персонализация и адаптация: Создание индивидуализированных решений,
          адаптированных к уникальным потребностям каждого бизнеса, чтобы
          обеспечить максимальное удовлетворение клиентов и пользователей.
        </li>
        <li className='company-text'>
          Качество и результативность: Гарантия высокого качества услуг и
          результативности предлагаемых решений, которые помогают бизнесам
          достичь своих целей и повысить уровень удовлетворенности и лояльности
          клиентов.
        </li>
        <p className='company-text'>
          <b
            style={{
              color: '#00A396',
              fontWeight: 600,
            }}
          >
            Цель
          </b>
        </p>
        <p className='company-text'>
          Стать главным цифровым партнером бизнеса в Казахстане, внедряя
          современные технологии и решения для лучшего опыта клиентов.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
