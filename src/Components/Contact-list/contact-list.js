import React from 'react'
import ContactItem from '../Contact-list/Contact-item/contact-item'


class ContactList extends React.Component {
    render () {
        return (
           <ul>
               <ContactItem />
               <ContactItem />
               <ContactItem />
               <ContactItem />
               <ContactItem />
           </ul>
        )
    }
}

export default ContactList