import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { ReactComponent as DeleteLogo } from 'src/assets/icons/delete-button.svg';
import { ReactComponent as BatteryLogo } from 'src/assets/icons/Battery.svg';
import { ReactComponent as LockLogo } from 'src/assets/icons/lock.svg';
import { ReactComponent as WheelLogo } from 'src/assets/icons/wheel.svg';
import { ReactComponent as PointerLogo } from 'src/assets/icons/card-return-button.svg';
import { MainLayout } from 'src/base/components';

export const OmniGhostCard = (): ReactElement => {
  return (
    <MainLayout
      topTitle="OmniGhost 55478"
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => console.log('Welcome'),
      }}
      rightTopIcon={{
        svg: <DeleteLogo />,
        clicked: () => console.log('Welcome'),
      }}
      withBottomNavigation={false}
    >
      <section className={styles.card__layout}>
        <div className={styles.card_page}>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>55.761811, 37.610116</h2>
              <p className={styles.card__item_subtitle}>координаты</p>
            </div>
            <button
              className={styles.card__info_button}
              /*  onClick={() => setIsAboutOpen(true)}*/
            >
              Вся информация
            </button>
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>Онлайн</h2>
              <p className={styles.card__item_subtitle}>статус устройств</p>
            </div>
            <PointerLogo />
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>15 км/ч</h2>
              <p className={styles.card__item_subtitle}>скорость движения</p>
            </div>
            <PointerLogo />
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <div className={styles.card__item_battery}>
                <BatteryLogo />
                <h2 className={styles.card__item_title}>47%</h2>
              </div>

              <p className={styles.card__item_subtitle}>
                уровень заряда батареи
              </p>
            </div>
            <PointerLogo />
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>Отстёгнут</h2>
              <p className={styles.card__item_subtitle}>состояние троса</p>
            </div>
            <button className={styles.card__close_lock}>
              <LockLogo />
              <span className={styles.button_text}>Замок троса</span>
            </button>
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>Открыт</h2>
              <p className={styles.card__item_subtitle}>
                состояние замка-подковы
              </p>
            </div>
            <button className={styles.card__open_lock}>
              <WheelLogo />
              <span className={styles.button_text}>Замок на колесе</span>
            </button>
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>0 Interval</h2>
            </div>
            <PointerLogo />
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>H0 Interval</h2>
            </div>
            <PointerLogo />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
