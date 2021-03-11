import { KeyListenerContainer as Container } from 'react-keyboard-key';
import { FC } from 'react';

export type KeyInfo = {
  key: string | null;
  code: string | null;
  keyCode: number | null;
  output: KeyboardEvent | null;
};

type Params = {
  keyInfo: KeyInfo;
};

type Props = {
  children: (params: Params) => JSX.Element;
}

const KeyListenerContainer: FC<Props> = ({ children }) => {
  return (
    <Container
      onKeyDownCallback={e => {
        e.preventDefault();
      }}
    >
      {keyInfo => children(keyInfo)}
    </Container>
  );
};

export default KeyListenerContainer;
