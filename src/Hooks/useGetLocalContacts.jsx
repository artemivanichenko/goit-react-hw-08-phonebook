import { useEffect, useState } from 'react';

export const useGetLocalContacts = (KEY, dataContacts) => {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(KEY)) || dataContacts
  );

  useEffect(() => {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  }, [KEY, state]);
  return [state, setState];
};
