import AppDispatcher from '../AppDispatcher';

const BasicInfoActions = {
  populateBasicInfo(basicInfo) {
    AppDispatcher.dispatch({
      type: 'POPULATE_BASIC_INFO',
      payload: {
        basicInfo: {
          name: basicInfo.name,
          title: basicInfo.title,
          profilePic: basicInfo.profilePic,
          splashPic: basicInfo.splashPic
        }
      }
    })
  }
}

export default BasicInfoActions;
