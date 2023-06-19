import CircularProgress from '@mui/material/CircularProgress';

import { useAppSelector } from '@/store/hooks';

import './loader.scss';

const Loader: React.FC = () => {
  const { display } = useAppSelector((state) => state.loader);

  return (
    <div className="loader-container" style={{ display }}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
