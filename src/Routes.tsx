import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Home from '@/pages/Home';
import PostCreate from '@/pages/post/Create';
import PostDetail from '@/pages/post/Detail';
import PostEdit from '@/pages/post/Edit';
import MyPosts from '@/pages/my/Posts';
import MySetting from '@/pages/my/Setting';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<PageLayout />}>
        <Route path="/home" index element={<Home />} />
        <Route path="/post/create" index element={<PostCreate />} />
        <Route path="/post/detail" index element={<PostDetail />} />
        <Route path="/post/edit" index element={<PostEdit />} />
        <Route path="/my/posts" index element={<MyPosts />} />
        <Route path="/my/setting" index element={<MySetting />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Route>
    </ReactRouterRoutes>
  );
};
