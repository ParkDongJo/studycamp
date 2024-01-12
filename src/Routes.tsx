import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import PageLayout from './layouts/PageLayout'
import Home from '@/pages/Home';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<PageLayout />}>
        <Route path="/home" index element={<Home />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Route>
    </ReactRouterRoutes>
  )
}