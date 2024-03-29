import React from 'react';
import { motion } from 'framer-motion';

const Delivery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className='block'
    >
      <h1 className='title-header'>Условия доставки</h1>
      <div className='company-block'>
        <h4>
          ДЛЯ ВАС действует постоянная скидка 500 рублей на доставку заказа
          стоимостью от 5000 рублей.
        </h4>
        <p>Виды доставки:</p>
        <p className='company-text'>
          Компания <b style={{ color: '#000' }}>MARSO</b> с большим вниманием
          относится к сохранности продукции своих клиентов, поэтому сотрудничает
          только с проверенными транспортными операторами – Почтой России, СДЭК,
          DPD.
        </p>
        <p className='company-text'>
          Национальный почтовый оператор, осуществляющий услуги по доставке
          товаров через пункты выдачи заказов, включает в себя 42 000 отделений,
          работающих в 1200 городах в разных регионах страны.
        </p>
        <p className='company-text'>
          Забрать заказ можно в течение 30 календарных дней с момента его
          поступления в одно из отделений Почты России. Оператор осуществляет
          доставку заказов даже в труднодоступные регионы РФ.
        </p>
        <p className='company-text'>
          Один из лидеров российского транспортного рынка экспресс-доставки
          посылок и грузов. Компания предлагает два вида доставки – курьерская
          доставка товаров до дверей клиента и доставка до пункта выдачи заказа.
        </p>
        <p className='company-text'>
          Сеть пунктов приема и выдачи заказов СДЭК включает 5000 отделений,
          работающих более чем в 900 городах РФ. Забрать заказ можно в течение
          14 дней с момента его поступления в один из пунктов выдачи СДЭК.
        </p>
        <p className='company-text'>
          Один из лидеров российского транспортного рынка экспресс-доставки
          посылок и грузов. Компания предлагает два вида доставки – курьерская
          доставка товаров до дверей клиента и доставка до пункта выдачи заказа.
        </p>
        <p className='company-text'>
          Сеть пунктов приема и выдачи заказов DPD включает 4000 отделений,
          работающих в 600 городах РФ. Забрать заказ можно в течение 7 дней с
          момента его поступления в один из пунктов выдачи DPD.
        </p>
        <h4>Условия оформления доставки и стоимость услуги</h4>
        <p className='company-text'>
          Чтобы оформить заказ, вам необходимо выбрать один из указанных
          способов доставки на нашем сайте. Выбираете на сайте продукцию и
          добавляете ее в корзину, далее в корзине нажимаете кнопку «оформить
          заказ».
        </p>
        <p className='company-text'>
          В появившемся окне выбираем регион доставки (в графе местоположение
          указываем адрес доставки, если адрес не выбирается автоматически,
          следуем подсказкам), далее из предложенных вариантов доставки выбираем
          нужный нам способ. Стоимость доставки рассчитывается автоматически в
          зависимости от способа доставки. Нажимаем кнопку «далее» и в
          появившемся окне заполняем данные получателя:
        </p>
        <ul>
          <li style={{ color: '#00adab' }}>
            <span className='company-text'>ФИО</span>
          </li>
          <li style={{ color: '#00adab' }}>
            <span className='company-text'>Е-mail</span>
          </li>
          <li style={{ color: '#00adab' }}>
            <span className='company-text'>Контактный телефон</span>
          </li>
          <li style={{ color: '#00adab' }}>
            <span className='company-text'>
              Если у вас курьерская доставка, заполняем адрес проживания
              (область, город или поселок, улица, дом, квартира)
            </span>
          </li>
        </ul>
        <p className='company-text'>
          Нажимаем кнопку «далее», затем кнопку «оформить заказ» и переходим к
          оплате заказа.{' '}
        </p>
        <h4>Стоимость услуги</h4>
        <p className='company-text'>
          Стоимость доставки рассчитывается, исходя из общего веса заказанной
          продукции и вашего региона проживания.{' '}
        </p>
        <h4>Сроки доставки</h4>
        <p className='company-text'>
          Независимо от того, какой способ доставки вы выбрали – Почту России,
          СДЭК, DPD, сроки доставки продукции зависят от отдаленности вашего
          региона. Например, доставка товаров по Москве и Московской области
          осуществляется от 1 до 3 дней. В дальние регионы России сроки доставки
          увеличиваются.
        </p>
        <p className='company-text'>
          <b style={{ color: 'red' }}>Обратите внимание!</b> Заказы поставляются
          транспортной компанией, посылки доставляются в соответствии с
          Условиями поставки. Информация о времени транзита может быть изменена
          в результате погоды и дорожных условий. Это может добавить
          дополнительные транзитные дни для доставки. В дни высокой загрузки
          передача заказов транспортным компаниям может осуществляться в течении
          5 рабочих дней.
        </p>
        <h4>Процедура получения посылки:</h4>
        <ul>
          <li style={{ color: '#00adab' }}>
            <span className='company-text'>
              Перед принятием посылки необходимо проверить состояние посылки и
              убедиться, что коробка не повреждена (не деформирована, не
              разорвана, не заклеена другой лентой, кроме оригинальной ленты);
            </span>
          </li>
          <li style={{ color: '#00adab' }}>
            <span className='company-text'>
              Если посылка окажется поврежденной, вы не должны ее принимать.
              Пожалуйста, немедленно свяжитесь с нами через эл. почту{' '}
              <a style={{ color: '#00adab' }} href='mailto:info@marso.su'>
                info@marso.su
              </a>{' '}
              или позвоните нам на номер горячей линии 8-800-301-02-99;
            </span>
          </li>
          <li style={{ color: '#00adab' }}>
            <span className='company-text'>
              Как только посылка вернется в{' '}
              <b style={{ color: '#000' }}>MARSO</b>, вам будет отправлена
              новая.
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Delivery;
