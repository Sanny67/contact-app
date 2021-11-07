import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

const contacts = [
  {id:1, name:"Sanny", email:'sannydev6797@gmail.com'},
  {id:2, name:"Shuvo", email:'shuvo@gmail.com'}
];

function App() {
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
