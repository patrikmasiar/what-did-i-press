import { FC } from 'react';
import Link from "next/link";
import style from './navigation/Navigation.module.scss';

const Navigation: FC = () => {
  return (
    <nav>
      <div className={style.navigation}>
        <Link href='/'>
          Home
        </Link>
        <Link href='/docs/events'>
          Docs
        </Link>
      </div>
    </nav>
  )
};

export default Navigation;
