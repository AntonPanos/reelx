import { useAppSelector } from '@/store/hooks';

import './loader.scss';

const Loader: React.FC = () => {
  const { display } = useAppSelector((state) => state.loader);

  return (
    <div className="loader-container" style={{ display }}>
      <div>LOADER</div>
    </div>
  );
};

export default Loader;
