export const addContact = (contact) => {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

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
  