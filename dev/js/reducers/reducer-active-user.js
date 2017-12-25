export default function (state = null, action) {
  //define default value ^
  switch(action.type) {
    case 'USER_SELECTED':
      return action.payload;
      break;
  }

  return state;

}