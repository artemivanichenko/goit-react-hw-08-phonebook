import { useEffect, useState } from 'react';

export const useGetLocalContacts = (KEY, dataContacts) => {
  const [state, setState] = useState();
  const contacts = localStorage.getItem(KEY);
  const parsedContacts = JSON.parse(contacts);
  if (parsedContacts) {
    setState({ contacts: parsedContacts } ?? dataContacts);
  }

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [KEY, state]);
  return [state, setState];
};
