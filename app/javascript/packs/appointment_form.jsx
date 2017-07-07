import 'react-datetime/css/react-datetime'

export default class AppointmentForm extends React.Component{
  handleChange (e){
    const name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  handleSubmit (e){
    e.preventDefault();
    this.props.onFormSubmit();
  }

  setApptTime (e) {
    const name = 'apt_time';
    const obj = {};

    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  render () {
    const inputProps = {
      name: 'apt_time'
    };

    return (
      <div>
        <h2>Make a new appointment</h2>
        <Label label = 'Enter a title, date and time' />
        <form onSubmit={ (event) => this.handleSubmit(event) } >

          <input name='title' placeholder='App Title' 
            defaultValue={ this.props.input_title } 
            onChange={ (event) => this.handleChange(event) } />

          <Datetime input={ false } open={ true } inputProps={ inputProps }
            defaultValue={ this.props.input_apt_time }
            onChange={ (event) => this.setApptTime(event) } />

          <input type='submit' value='Make Appt' className='submit-button' />
        </form>
      </div>
    )
  }    
}
