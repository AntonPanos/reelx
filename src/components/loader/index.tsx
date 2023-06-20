import { useAppSelector } from '@/store/hooks';

import './loader.scss';

const Loader: React.FC = () => {
  const { display } = useAppSelector((state) => state.loader);

  return (
    <div className="loader-container" style={{ display }}>
      <div className="three-body">
        <div className="three-body__dot" />
        <div className="three-body__dot" />
        <div className="three-body__dot" />
      </div>
    </div>
  );
};

export default Loader;
