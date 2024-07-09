import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import { ReactComponent as BackLogo } from 'src/assets/icons/back.svg';
import { ReactComponent as DeleteLogo } from 'src/assets/icons/delete-button.svg';
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
      <section>Привет</section>
    </MainLayout>
  );
};
