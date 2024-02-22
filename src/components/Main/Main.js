import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { motion } from 'framer-motion';

import './Main.css';

const Main = () => {
  const slides = [
    {
      url: 'https://marso.su/upload/iblock/285/b10av2cbstlusyd9j9cwk5zh3ash0t7j.png',
    },
    {
      url: 'https://marso.su/upload/iblock/bc7/t26765vdvb9xz2624hllertu0urqcojl.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className='max-w-[95vw] carousel w-full m-auto px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-[50%] p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-[50%] p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className='main-info-block'>
        <div className='main-info'>
          <img className='main-info-img' src='./icon/1.png' />
          <p className='main-info-text'>Безналичный расчет</p>
        </div>
        <div className='main-info'>
          <img className='main-info-img' src='./icon/2.png' />
          <p className='main-info-text'>Доставка по всей Казахстан</p>
        </div>
        <div className='main-info'>
          <img className='main-info-img big-img' src='./icon/3.png' />
          <p className='main-info-text'>Возврат товара в течение 7 дней</p>
        </div>
        <div className='main-info'>
          <img className='main-info-img big-img' src='./icon/4.png' />
          <p className='main-info-text'>Гарантия качества всех товаров</p>
        </div>
        <div className='main-info'>
          <img className='main-info-img big-img' src='./icon/5.png' />
          <p className='main-info-text'>Бесплатный звонок 8 707 357-97-07</p>
        </div>
      </div>

      <div className='about-block'>
        <div className='about'>
          <div className='about-title'>
            <p className='about-header'>О нас</p>
          </div>
          <div>
            <p className='about-text'>
              Создание компании <b style={{ color: '#000' }}>MARSO</b>{' '}
              вдохновлено и буквально дышит морем и солнцем. Отсюда и само
              название: <b style={{ color: '#000' }}>MARSO</b> – это море и
              солнце (в переводе с итальянского: mà·re – море, sole - солнце).{' '}
            </p>
          </div>
        </div>
        <div className='about'>
          <div className='about-title'>
            <p className='about-header'>Продукция MARSO</p>
          </div>
          <div>
            <p className='about-text'>
              Ароматы MARSO производятся из качественных и тщательно отобранных
              ингредиентов. Сырье приобретается в компании{' '}
              <b style={{ color: '#000' }}>Parfums Plus,</b> положительно
              зарекомендовавшей себя на рынке парфюмерии.
            </p>
          </div>
        </div>
        <div className='about'>
          <div className='about-title'>
            <img className='about-marso' src='./icon/marso.png' />
          </div>
          <div>
            <p className='about-text'>
              Название компании также можно смело перевести как "зарождающаяся
              жизнь". Каждый день, снова и снова, мы создаем ароматы для жизни.
              Ароматы <b style={{ color: '#000' }}>MARSO</b> насквозь пропитаны
              энергией главных составляющих жизни - морем и солнцем.{' '}
            </p>
          </div>
        </div>
        <div className='about'>
          <div className='about-title'>
            <img className='about-parfumplus' src='./icon/ParfumPlus.png' />
          </div>
          <div>
            <p className='about-text'>
              Эта передовая французская компания, специализирующаяся на создании
              и выпуске парфюмерных композиций, основана в 2002 году Стефаном и
              Кристофом Гараваньо. <b style={{ color: '#000' }}>Parfums Plus</b>{' '}
              расположена в Бар-сюр-Лу, в самом сердце региона Грассе, где
              созданы ультрасовременные производственные объекты с передовым
              оборудованием.{' '}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
