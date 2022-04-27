import React from "react";
import "./App.css";
import { AddContact } from "./components/AddContact";
import { ContactDetails } from "./components/ContactDetails";
import { Contact } from "./interfaces/interfaces";
import { useContactsQuery } from "./services/api";

function App() {
  const { isError, isLoading, isSuccess, data } = useContactsQuery();

  return (
    <div className="App">
      <h1>React Redux Toolkit</h1>
      <AddContact/>
      {isLoading && <h2>Loading....</h2>}
      {isError && <h2>Algo paso...</h2>}
      {isSuccess && (
        <div>
          {data?.map((contact: Contact) => (
            <div>
              <span>{contact.name}</span>
              <ContactDetails id={contact.id}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
