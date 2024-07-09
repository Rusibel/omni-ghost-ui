import React, { ReactElement, useState, useCallback } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { ReactComponent as DeleteLogo } from 'src/assets/icons/delete-button.svg';
import { ReactComponent as BatteryLogo } from 'src/assets/icons/Battery.svg';
import { ReactComponent as LockLogo } from 'src/assets/icons/lock.svg';
import { ReactComponent as WheelLogo } from 'src/assets/icons/wheel.svg';
import { ReactComponent as PointerLogo } from 'src/assets/icons/card-return-button.svg';
import { MainLayout, Button, Popup, Input } from 'src/base/components';

export const OmniGhostCard = (): ReactElement => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState<boolean>(false);
  const [popupContent, setPopupContent] = useState<{
    isOpen: boolean;
    title: string;
    inputPlaceholder: string;
  }>({ isOpen: false, title: '', inputPlaceholder: '' });

  const navigation = useNavigate();

  const openInputPopup = useCallback(
    (title: string, inputPlaceholder: string) => {
      setPopupContent({ isOpen: true, title, inputPlaceholder });
    },
    [],
  );

  const closeInputPopup = useCallback(() => {
    setPopupContent({ isOpen: false, title: '', inputPlaceholder: '' });
  }, []);

  const handleSpeedIconClick = useCallback(() => {
    openInputPopup('Скорость движения', 'Введите скорость');
  }, [openInputPopup]);

  const handleBatteryIconClick = useCallback(() => {
    openInputPopup('Уровень заряда батареи', 'Введите уровень заряда');
  }, [openInputPopup]);

  const handleStatusIconClick = useCallback(() => {
    openInputPopup('Статус устройства', 'Введите новый статус');
  }, [openInputPopup]);

  const handleOpenPopup = useCallback((): void => {
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = useCallback((): void => {
    setIsPopupOpen(false);
  }, []);

  const handleOpenInfoPopup = useCallback((): void => {
    setIsInfoPopupOpen(true);
  }, []);

  const handleCloseInfoPopup = useCallback((): void => {
    setIsInfoPopupOpen(false);
  }, []);

  const handleSubmit = useCallback((): void => {
    console.log('Submit');
    handleClosePopup();
  }, [handleClosePopup]);

  const handleCancel = useCallback((): void => {
    console.log('Отмена');
    handleClosePopup();
  }, [handleClosePopup]);

  return (
    <MainLayout
      topTitle="OmniGhost 55478"
      leftTopIcon={{
        svg: <BackLogo />,
        clicked: () => navigation('/main'),
      }}
      rightTopIcon={{
        svg: <DeleteLogo />,
        clicked: () => handleOpenPopup(),
      }}
      withBottomNavigation={false}
    >
      <section className={styles.card__layout}>
        <Popup
          isOpen={isPopupOpen}
          handleClosePopup={handleClosePopup}
          handleClickSubmit={handleSubmit}
          handleCancelButtonClick={handleCancel}
          headerTitle="Удалить OmniGhost 55478"
          submitButtonLabel="Удалить"
          cancelButtonLabel="Отмена"
        >
          <div className={styles.card__popup_text}>
            Вы точно хотите удалить
            <br /> OmniGhost 55478?
          </div>
        </Popup>
        <Popup
          isOpen={isInfoPopupOpen}
          handleClosePopup={handleCloseInfoPopup}
          handleClickSubmit={handleCloseInfoPopup}
          handleCancelButtonClick={handleCloseInfoPopup}
          headerTitle="OmniGhost 55478"
          submitButtonLabel="Скопировать в буфер обмена"
          cancelButtonLabel="Закрыть"
        >
          <div className={styles.card__popup_text}>
            <ul className={styles.card__info}>
              <li className={styles.card__info_item}>
                Координаты:{' '}
                <span className={styles.card__detail}>
                  55.761811, 37.610116
                </span>
              </li>
              <li className={styles.card__info_item}>
                Статус: <span className={styles.card__detail}>Доступен</span>
              </li>
              <li className={styles.card__info_item}>
                Скорость: <span className={styles.card__detail}>15 км/ч</span>
              </li>
              <li className={styles.card__info_item}>
                Уровень заряда: <span className={styles.card__detail}>47%</span>
              </li>
              <li className={styles.card__info_item}>
                Состояние троса:{' '}
                <span className={styles.card__detail}>Отстёгнут</span>
              </li>
            </ul>
          </div>
        </Popup>
        <Popup
          isOpen={popupContent.isOpen}
          handleClosePopup={closeInputPopup}
          handleClickSubmit={closeInputPopup}
          headerTitle={popupContent.title}
          submitButtonLabel="Применить"
        >
          <div className={styles.card__popup_text}>
            <Input
              label={popupContent.title}
              placeholder={popupContent.inputPlaceholder}
            />
          </div>
        </Popup>
        <div className={styles.card_page}>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>55.761811, 37.610116</h2>
              <p className={styles.card__item_subtitle}>координаты</p>
            </div>
            <Button
              className={styles.card__info_button}
              theme="secondary"
              size="xs"
            >
              <span onClick={handleOpenInfoPopup}>Вся информация</span>
            </Button>
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>Онлайн</h2>
              <p className={styles.card__item_subtitle}>статус устройств</p>
            </div>
            <PointerLogo onClick={handleStatusIconClick} />
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>15 км/ч</h2>
              <p className={styles.card__item_subtitle}>скорость движения</p>
            </div>
            <PointerLogo onClick={handleSpeedIconClick} />
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
            <PointerLogo onClick={handleBatteryIconClick} />
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>Отстёгнут</h2>
              <p className={styles.card__item_subtitle}>состояние троса</p>
            </div>
            <Button
              className={styles.card__close_lock}
              theme="secondary"
              size="xs"
            >
              <LockLogo />
              <span>Замок троса</span>
            </Button>
          </div>
          <div className={styles.card__item}>
            <div className={styles.card__item_colm}>
              <h2 className={styles.card__item_title}>Открыт</h2>
              <p className={styles.card__item_subtitle}>
                состояние замка-подковы
              </p>
            </div>
            <Button
              className={styles.card__open_lock}
              theme="secondary"
              size="s"
            >
              <WheelLogo />
              <span className={styles.card__button_text}>Замок на колесе</span>
            </Button>
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
