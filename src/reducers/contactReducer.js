

const initialState = {
    contacts: [
        {
            name: 'Augustine',
            phoneNumber: '0542222221',
            location: 'Accra'
        }, {
            name: 'Augustine',
            phoneNumber: '0542222221',
            location: 'Accra'
        },
    ]
}


const contactReducer = ( state= initialState, action) => {
   switch (action.type) {
       case 'ADD_CONTACT':
           return {
               ...state, contacts: [...state.contacts, action.payload]
           }
   
       default:
           return state
   }
}

export default contactReducer;