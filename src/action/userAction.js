export const addContact = (contact) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .add(contact)
      .then(
        () => {},
        () => {}
      );
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
        let contacts = [];
        querySnapshot.forEach((doc) => contacts.push(doc.data()));
        dispatch({
          type: "GET_ALL_CONTACTS",
          payload: contacts,
        });
      });
  };
};
