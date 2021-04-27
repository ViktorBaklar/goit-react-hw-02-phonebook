import ContactItem from '../contactItem'
import style from './contactList.module.css'
import uniqueId from 'lodash/uniqueId';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contactList}>
    {
      contacts.map(contact => {
        let id = uniqueId("prefix-")
        const name = contact
        return (
          <li /* key={id} */>
            <ContactItem
              id={id}
              name={name}
              // number={number}
              onDeleteContact={onDeleteContact}
            />
          </li>)
      })
    }
  </ul>
)

export default ContactList;