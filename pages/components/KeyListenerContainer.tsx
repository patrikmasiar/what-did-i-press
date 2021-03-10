import { FC, useState, useEffect, useCallback } from 'react';

type Params = {
  keyInfo: any;
};

export type KeyInfo = {
  key: string;
  code: string;
  keyCode: number;
};

type Props = {
  children: (params: Params) => JSX.Element;
}

const KeyListenerContainer: FC<Props> = ({ children }) => {
  const [keyInfo, setKeyInfo] = useState<KeyInfo | null>(null);

  useEffect(() => {
    addKeyListener();

    return () => {
      removeKeyListener();
    }
  }, []);

  const addKeyListener = () => {
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyDown);
  };

  const removeKeyListener = () => {
    document.removeEventListener('keydown', onKeyDown);
    document.removeEventListener('keyup', onKeyDown);
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();

    setKeyInfo({
      key: e.key,
      code: e.code,
      keyCode: e.keyCode,
    });
  }, []);

  return children({
    keyInfo,
  });
};

export default KeyListenerContainer;