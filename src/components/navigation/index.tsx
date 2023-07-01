/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { navMenu } from '@/constants/menus';

const Navigation: React.FC = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState<number>(2);

  const navigateHandle = (itemId: number): void => {
    setActive(itemId);
    navigate(navMenu[itemId].route);
  };

  return (
    <div className="fixed bottom-0 m-auto w-full">
      <div className="max-h-[var(--nav-height)] rounded-t-xl bg-gray-200 px-6">
        <ul className="relative flex justify-around">
          {navMenu.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col pt-6 text-center"
                onClick={() => navigateHandle(i)}
              >
                <span
                  className={`absolute -top-5 z-0 flex h-16 w-16 rounded-full border-4 border-white bg-rose-600 duration-500 ${
                    active === i
                      ? 'translate-y-0 opacity-100 duration-500'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {/* <span className="absolute -left-[18px] top-4 h-3.5 w-3.5 rounded-tr-[11px] bg-transparent shadow-navShadowLeft" />
                  <span className="absolute -right-[18px] top-4 h-3.5 w-3.5 rounded-tl-[11px] bg-transparent shadow-navShadowRight" /> */}
                </span>
                <span
                  className={`z-10 cursor-pointer text-xl duration-500 ${
                    active === i && '-mt-6 text-white'
                  }`}
                >
                  <FontAwesomeIcon icon={menu.icon} />
                </span>
                <span
                  className={`${
                    active === i
                      ? 'translate-y-4 opacity-100 duration-700'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
