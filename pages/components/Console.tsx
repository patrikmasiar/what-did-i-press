import { FC } from 'react';
import style from './console/Console.module.scss';

const Console: FC = () => (
  <>
    <div className={style.menu}>
      <div className={style.close} />
      <div className={style.minimize} />
      <div className={style.zoom} />
    </div>
    <div className={style.wrapper}>
      
    </div>
  </>
);

export default Console;
