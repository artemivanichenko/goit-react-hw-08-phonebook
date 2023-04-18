import { PhoneBook } from './PhoneBook/PhoneBook';

export const App = () => {
  const getData = data => {
    console.log(data);
  };
  return <PhoneBook getData={getData} />;
};
