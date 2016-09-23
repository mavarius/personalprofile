import AppDispatcher from '../AppDispatcher';
import { EventEmitter } from 'events';

http://digital-fury.com/Learning/CodingHouse/profilePic.jpg

let _basicInfo = {
  name: 'Enter Name',
  title: 'Enter Title',
  profilePic: `https://api.adorable.io/avatars/285/${Math.floor(Math.random()*100)}.png`,
  splashPic: ''
};

const BasicInfoStore = Object.assign({}, EventEmitter.prototype, {
  startListening(callback) {
    this.on('CHANGE', callback)
  },

  stopListening(callback) {
    this.removeListener('CHANGE', callback)
  },

  getAll() {
    return _basicInfo;
  }
});

AppDispatcher.register(action => {
  const { type, payload } = action;

  switch (type) {
    case 'POPULATE_BASIC_INFO':
      const { profilePic, splashPic, name, title } = payload.basicInfo;
      _basicInfo.name = name;
      _basicInfo.title = title;
      _basicInfo.profilePic = profilePic;
      _basicInfo.splashPic = splashPic;
      break;
  }
});

export default BasicInfoStore;
