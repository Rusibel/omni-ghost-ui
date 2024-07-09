import React, { FC, ReactElement, useCallback, useState } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as CloseLogo } from 'src/assets/icons/closeIcon.svg';
import { ReactComponent as SearchLogo } from 'src/assets/icons/search.svg';
import { ReactComponent as RefreshLogo } from 'src/assets/icons/refresh.svg';
import { ReactComponent as SettingsLogo } from 'src/assets/icons/settings.svg';
import { ReactComponent as AddLogo } from 'src/assets/icons/add.svg';
import { Link, useNavigate } from 'react-router-dom';
import { Button, ButtonIcon, Input, MainLayout, Select } from 'src/base/components';
import { SettingsModalWindow } from 'src/pages/main_page/settings/SettingsModalWindow';
import { PopupDown } from 'src/base/components/PopupDown';
import { WhiteSection } from 'src/base/components/WhiteSection';
import { ScrollWrapper } from 'src/base/components/ScrollWrapper';
import { DeviceStatusSelectWithStatus } from 'src/modules/components/constants';

interface IMainPage {
  isSettingsOpened: boolean;
  actionSettings: (flag: boolean) => void;
}

export const MainPageComponent: FC<IMainPage> = ({
                                                   isSettingsOpened,
                                                   actionSettings,
                                                 }) => {
  const navigation = useNavigate();

  const [selectArr, setSelectArr] = useState(DeviceStatusSelectWithStatus);

  const handleClickSelect = useCallback((obj: any) => {
    if (obj.active) {
      setSelectArr(obj.data);
    }

  }, []);

  const handleClickNew = useCallback(() => {
    navigation('/create');
  }, [navigation]);

  return (
    <section className={styles.body}>
      <section className={styles.root_section}>
        <section>
          <WhiteSection>
            <nav className={styles.nav_section}>
              <div className={styles.input_section}>
                <SearchLogo />
                <Input className={styles.input}
                       placeholder="Поиск по deviceID" />
              </div>
              <ButtonIcon>
                <CloseLogo />
              </ButtonIcon>
            </nav>
          </WhiteSection>
        </section>
        <section className={styles.status_section}>
          <Button
            className={styles.refresh_button}
            size="s">
            <div className={styles.rotate}>
              <RefreshLogo />
            </div>
            <div>Обновить список</div>
          </Button>
          <Select defaultData={selectArr}
                  onChange={handleClickSelect}
                  headerTheme="base" />
        </section>
        <WhiteSection>
          <ScrollWrapper
            className={styles.ul_section}>
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>1</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to="/omni-card" className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>2</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to="/omni-card" className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>3</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to="/omni-card" className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>4</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to="/omni-card" className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
            <li className={styles.ul_border} />
            <li className={styles.list_item}>
              <div className={styles.id_section}>
                <div className={styles.num}>5</div>
                <div className={styles.data}>32547</div>
              </div>
              <Link to="/omni-card" className={styles.status_button}>
                <div>Online</div>
                <div className={styles.online} />
              </Link>
            </li>
          </ScrollWrapper>
        </WhiteSection>
        <footer className={styles.footer}>
          <Button
            className={styles.button_with_icon}
            onClick={handleClickNew}
            theme="secondary"
            size="l"
          >
            <AddLogo />
            <div>Создать новый OmniGhost</div>
          </Button>
        </footer>
      </section>
      {
        isSettingsOpened ?
          <PopupDown topTitle="Выбор окружения" setIsOpen={actionSettings}
                     submitButtonLabel="Готово"
                     handleClosePopup={actionSettings}>
            <SettingsModalWindow />
          </PopupDown>
          :
          null}
    </section>
  );
};

export const MainPage = (): ReactElement => {
  const [isSettingsOpened, setIsSettingsOpened] = useState(false);

  const handleClickSettings = useCallback(() => {
    setIsSettingsOpened(!isSettingsOpened);
  }, [isSettingsOpened]);

  return (
    <MainLayout
      topTitle="Тест"
      rightTopIcon={{
        svg: <SettingsLogo />,
        clicked: () => handleClickSettings(),
      }}
      withBottomNavigation={false}
    >
      <MainPageComponent
        isSettingsOpened={isSettingsOpened}
        actionSettings={setIsSettingsOpened}
      />
    </MainLayout>
  );
};