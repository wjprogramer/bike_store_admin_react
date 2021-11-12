export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_SETUP = 'USER_SETUP';
export const USER_CHANGE_LANG = 'USER_CHANGE_LANG';

const initState = {
  id: 0,
  lang: 'zh-TW',
  username: '',
  image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png',
  isLogin: false,
  lastLogin: '',
  refreshSession: '',
  role: 0,
  session: '',
  credit: 0,
  unread_count: 0,
};

export default function reducer(state = initState, action) {
  let user, userInfo, result;
  switch (action.type) {
    case USER_LOGIN:
      userInfo = action.userInfo
      // user = Object.assign({}, state, {
      //     ...userInfo
      // })
      sessionStorage.setItem('user', JSON.stringify(userInfo))
      window.location.assign('/')
      return userInfo

    case USER_SETUP:
      userInfo = action.userInfo
      user = Object.assign({}, state, {
          ...userInfo
      })
      return user

    case USER_UNREAD_COUNT:
      let unreadCount = action.count
      user = Object.assign({}, state, {
        unreadCount: unreadCount
      })
      return user


    case USER_CHANGE_LANG:
      result = Object.assign({}, state,
        {
          lang: action.lang,
        },
      )
      ls.set('user', result)
      i18n.changeLanguage(action.lang);
      return result;

    case USER_READ_NOTIFY:
      result = Object.assign({}, state,
        {
            event_type: action.event_type, // 通知類型
            related_id: action.related_id, // 通知事件中->該事件的id
            event_id: action.event_id, // 通知事件id
            sub_deposit_id: action.sub_deposit_id // 通知事件id
        }
      )
      return result;

    case USER_EVENT_SOUND:
      if (state.soundPlayTime == null) {
        let audio = new Audio(dingdong)
        audio.play()
        return result = Object.assign({}, state,
          {
              soundPlayTime: moment().add(1, "minutes"),
          }
        );
      } else if (action.soundPlayTime.isAfter(state.soundPlayTime)) {
        let audio = new Audio(dingdong)
        audio.play()
        return result = Object.assign({}, state,
          {
              soundPlayTime: action.soundPlayTime.add(1, "minutes"),
          }
        );
      }
      return state;

    case USER_LOGOUT:
      sessionStorage.removeItem('user');
      window.location.assign('/login')
      return state;
      
    default:
        return state;
  }
}