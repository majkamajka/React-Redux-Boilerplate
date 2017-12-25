export const selectUser = (user) => { //entire functtion is action creator
  console.log('ssdsdsd', user.first);
  return { //<- this is action
    type: 'USER_SELECTED',
    payload: user
  }
};

