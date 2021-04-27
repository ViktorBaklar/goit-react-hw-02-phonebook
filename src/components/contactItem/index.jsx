import PropTypes from 'prop-types'
import Button from '../UI/button'


const ContactItem = ({ id, name, /* number,  */ onDeleteContact }) => {
  return (
    <>
      <span>{name}: </span>
      {/* <span>{number}</span> */}
      <Button
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
			</Button>
    </>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
}