import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { io } from 'socket.io-client';

const Editor = ({ documentId }) => {
  const [socket, setSocket] = useState();
  const [code, setCode] = useState('');

  useEffect(() => {
    const s = io(import.meta.env.VITE_API_BASE_URL);
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.once('load-document', (document) => {
      setCode(document);
    });

    socket.emit('get-document', documentId);
  }, [socket, documentId]);

  useEffect(() => {
    if (socket == null) return;

    const handler = (delta) => {
      setCode(delta);
    };
    socket.on('receive-changes', handler);

    return () => {
      socket.off('receive-changes', handler);
    };
  }, [socket]);

  const onChange = (value) => {
    setCode(value);
    socket.emit('send-changes', value);
  };

  useEffect(() => {
    if (socket == null) return;

    const interval = setInterval(() => {
      socket.emit('save-document', code);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [socket, code]);

  return (
    <CodeMirror
      value={code}
      height="100%"
      width="100vw"
      extensions={[javascript({ jsx: true })]}
      theme={okaidia}
      onChange={onChange}
      style={{ overflow: 'auto' }}
    />
  );
};

export default Editor;