export const addContact = (contact) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .add({
        ...contact,
        timestamp: getFirestore().FieldValue.serverTimestamp(),
      })
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
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .doc(contactId)
      .delete()
      .then(() => {});
  };
  // return {
  //   type: "DELETE_CONTACT",
  //   payload: contactId,
  // };
};

export const editContact = (newContact, contactId) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .doc(contactId)
      .update(newContact)
      .then(() => {});
  };
  // return {
  //   type: "EDIT_CONTACT",
  //   payload: {
  //     newContact,
  //     contactId,
  //   },
  // };
};

export const getAllContacts = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("contacts")
      .orderBy("timestamp", "desc")
      .onSnapshot(
        (querySnapshot) => {
          let contact = [];
          querySnapshot.forEach((doc) =>
            contact.push({ ...doc.data(), id: doc.id })
          );
          dispatch({
            type: "GET_ALL_CONTACTS",
            payload: contact,
          });
        },
        (e) => {
          console.log(e);
        }
      );
  };
};
