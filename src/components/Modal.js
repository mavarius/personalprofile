import React from 'react';

const Modal = React.createClass({
  saveForm(e) {
    e.preventDefault();
    const { formName, formTitle, formProfilePic, formSplashPic } = this.refs;

    let basicInfo = {
      name: (formName.value).toUpperCase(),
      title: formTitle.value,
      profilePic: formProfilePic.value,
      splashPic: formSplashPic.value
    }

    this.props.updateBasicInfo(basicInfo);
  },

  render() {
    const { modalSwitch, closeModal } = this.props;

    return(
      <div id='myModal' className='myModal' style={modalSwitch}>
        <div className='modalContent'>
          <span className='close' onClick={closeModal}>x</span>
          <form onSubmit={this.saveForm}>
            <div className='form-group'>
              <label htmlFor='formName'>name</label>
              <input type='text' className='inputForm' id='formName' ref='formName' placeholder='Your Name'/>
            </div>
            <div className='form-group'>
              <label htmlFor='formTitle'>title</label>
              <input type='text' className='inputForm' id='formTitle' ref='formTitle' placeholder='Your Name'/>
            </div>
            <div className='form-group'>
              <label htmlFor='formProfilePic'>profile pic</label>
              <input type='url' className='inputForm' id='formProfilePic' ref='formProfilePic' placeholder='www.yourpic.com'/>
            </div>
            <div className='form-group'>
              <label htmlFor='formSplashPic'>Splash Pic</label>
              <input type='url' className='inputForm' id='formSplashPic' ref='formSplashPic' placeholder='Your Name'/>
            </div>
            <button className='btn btnModal'>save</button>
          </form>
        </div>
      </div>
    )
  }
})

export default Modal;
