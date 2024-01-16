import { Outlet } from 'react-router-dom';
import { colors } from '@/constants/colors';
import ErrorBoundary from '@/layouts/ErrorBoundary';

export default function PageLayout() {
  return (
    <div
      style={{
        ...container,
        background: colors.background,
      }}
    >
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
}

const container = {
  width: '100%',
  minWidth: '1200px',
  maxWidth: '100%',
  padding: 0,
  margin: 0,
};
