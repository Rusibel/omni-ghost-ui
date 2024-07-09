import React, { FC } from 'react';
import { Route, Routes } from 'react-router';

import { routeComponentEdit, routeComponentsView, routeHome } from '../routes';

import { ViewComponentContainer } from 'src/modules/components/containers/ViewComponentContainer';
import { EditComponentContainer } from 'src/modules/components/containers/EditComponentContainer';

import { WelcomePage } from 'src/pages/Welcome';
import { OmniGhostCard } from 'src/pages/OmniGhostCard';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route
        path={routeComponentsView.fullPath}
        element={<ViewComponentContainer />}
      />
      <Route
        path={routeComponentEdit.fullPath}
        element={<EditComponentContainer />}
      />
      <Route path={routeHome.fullPath} element={<WelcomePage />} />
      <Route path="/omni-card" element={<OmniGhostCard />} />
    </Routes>
  );
};
