export const addContact = (contact) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .add(contact)
      .then(
        () => {},
        () => {}
      );
      console.log(contact);
  };
  // return {
  //   type: "ADD_CONTACT",
  //   payload: contact,
  // };
};

export const deleteContact = (contactId) => {
  return {
    type: "DELETE_CONTACT",
    payload: contactId,
  };
};

export const editContact = (newContact, contactId) => {
  return {
    type: "EDIT_CONTACT",
    payload: {
      newContact,
      contactId,
    },
  };
};


export const getAllContacts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .onSnapshot((querySnapshot) => {
      let contact = [];
        querySnapshot.forEach((doc) => contact.push(doc.data()));
        console.log(contact);
        dispatch({
          type: "GET_ALL_CONTACTS",
          payload: contact,
        });
      },
      (e) => {
        console.log("hggfhtg");
      });
  };
};
