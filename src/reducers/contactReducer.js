const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "DELETE_CONTACT":
      const filterContact = state.contacts.filter((contact) => {
        return contact.id !== action.payload;
      });
      return { ...state, contacts: filterContact };
    case "EDIT_CONTACT":
      const updateContact = state.contacts.map((contact) => {
        if (contact.id === action.payload.contactId) {
          return action.payload.newContact;
        }
        return contact;
      });
      return { ...state, contacts: updateContact };
    default:
      return state;
  }
};

export default contactReducer;
