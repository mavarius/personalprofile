import React from 'react';
import Modal from './Modal';

import BasicInfoActions from '../actions/BasicInfoActions';
import BasicInfoStore from '../stores/BasicInfoStore';

import defaultProfilePic from '../images/profilePic.jpg';
import defaultSplashPic from '../images/splashPic.jpg';

const App = React.createClass({
  getInitialState() {
    return {
      basicInfo: BasicInfoStore.getAll(),
      modalSwitch: {display: 'none'}
    }
  },

  componentWillMount() {
    BasicInfoStore.startListening(this._onChange);
  },

  componentWillUnmount() {
    BasicInfoStore.stopListening(this._onChange);
  },

  _onChange() {
    this.setState({
      basicInfo: BasicInfoStore.getAll()
    });
  },

  updateBasicInfo(formInfo) {
    BasicInfoActions.populateBasicInfo(formInfo);

    this.closeModal();
  },

  openModal() {
    this.setState({
      modalSwitch: {display: 'block'}
    })
  },

  closeModal() {
    this.setState({
      modalSwitch: {display: 'none'}
    })
  },

  render() {
    const { name, title, profilePic, splashPic } = this.state.basicInfo;
    
    return (
      <div className='container'>
        <div className='row'>
          <span className='splashPic'><img src={splashPic}></img></span>
          <div className='profilePic'>
            <img src={profilePic}></img>
            <span id='editProfilePic' className='imgBtn' onClick={this.openModal}>edit</span>
          </div>
          <div className='titleBlock'>
            <h1 className='userName' onClick={this.openModal}>{name}</h1>
            <h2 className='userTitle' onClick={this.openModal}>{title}</h2>
          </div>
        </div>
        <Modal modalSwitch={this.state.modalSwitch} closeModal={this.closeModal} updateBasicInfo={this.updateBasicInfo}/>
      </div>
    )
  }
})

export default App;

// basicInfo.profilePic
