import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';

export default function ContactList({ getFilterName }) {
  return (
    <ul>
      {getFilterName().map(contact => (
        <ContactsItem key={contact.id} contacts={contact} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  getFilterName: PropTypes.func.isRequired,
};
