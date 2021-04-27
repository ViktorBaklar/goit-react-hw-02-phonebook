import { Component } from "react"
import style from './contactForm.module.css'
import Input from '../UI/input'
import Button from '../UI/button'

class ContactForm extends Component {
  state = {
    name: '',
    // number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState(() => ({ [name]: value }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    // const { onSubmit } = this.props;
    // onSubmit && onSubmit({ ...this.state })
    // console.log(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: ''/* , number: '' */ });
  };

  render() {

    return (
      <form className={style.contactForm} onSubmit={this.handleSubmit}>
        <label htmlFor="Name">Name</label>
        <Input name="Name" value={this.state.name} onChange={this.handleChange} />
        <Button type="submit">Add contact</Button>

      </form>
    );

  };

}
export default ContactForm;