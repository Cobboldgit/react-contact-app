import React, { useState } from 'react'
import '../App.css'


function Contact(props) {
    const users = props.details



    return(
        users.map((user, index) => {
            return(
                
                    <div className='list-box'>
                            <div key={index}>
                                <p>Name: {user.name}</p>
                                <p>PhoneNumber: {user.phoneNumber}</p>
                                <p>Location: {user.location}</p>
                            </div>
                    </div>
               
            )
        })
    )
}

export default Contact;