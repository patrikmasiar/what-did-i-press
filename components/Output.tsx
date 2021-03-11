import { FC } from 'react';
import { highlightJsonSyntax } from '../utils/utils';
// @ts-ignore
import style from './output/Output.module.scss';

type Props = {
  output: string | null;
};

const Output: FC<Props> = ({ output }) => {
  return (
    <div className={style.wrapper}>
      <span className={style.body}>
        {output !== "{}" ? (
          <span dangerouslySetInnerHTML={{__html: highlightJsonSyntax(output)}} />
        ) : (
          <span>
           {`$ Full event output >> {}`}
          </span>
        )}
      </span>
    </div>
  )
};

export default Output;
