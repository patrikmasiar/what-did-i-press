import { FC } from 'react';
import style from './console/Console.module.scss';
import type { KeyInfo } from './KeyListenerContainer';

type Props = {
  info: KeyInfo | null;
}

const Console: FC<Props> = ({ info }) => (
  <>
    <div className={style.menu}>
      <div className={style.close} />
      <div className={style.minimize} />
      <div className={style.zoom} />
    </div>
    <div className={style.wrapper}>
      <div className={style.row}>
        <div>
          { `$ event.key `}
        </div>
        <span>
          {`> Pressed key >> `}
        </span>
        <span>
          {info?.key ?? ''}
        </span>
      </div>

      <div className={style.row}>
        <div>
          { `$ event.code `}
        </div>
        <span>
          {`> Code >> `}
        </span>
        <span>
          {info?.code ?? ''}
        </span>
      </div>

      <div className={style.row}>
        <div>
          { `$ event.keyCode `}
        </div>
        <span>
          {`> Key code >> `}
        </span>
        <span>
          {info?.keyCode ?? ''}
        </span>
      </div>
    </div>
  </>
);

export default Console;
