import React, { useState } from "react";

import ContactList from "./Components/ContactList/ContactList";
import SingleUserDetails from "./Components/SingleUserDetails/SingleUserDetails";

function App() {
  const [featuredUser, setFeaturedUser] = useState(null);
  return (
    <>
      <h2>{featuredUser}</h2>
      {featuredUser ? (
        <SingleUserDetails setFeaturedUser={setFeaturedUser} />
      ) : (
        <ContactList setFeaturedUser={setFeaturedUser} />
      )}
    </>
  );
}

export default App;
