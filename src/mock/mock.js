import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers, Users} from './data/user';

let _Users = Users;;
export default{
  /**
   * mock bootstrap
   */
  bootstrap(){
    let mock = new MockAdapter(axios);

    //mock success request
    mock.onGet('/success').reply(200,{
      msg:'success'
    });

    //mock error request
    mock.onGet('/error').reply(500, {
      msg:'failure'
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {name} = config.params;
      let mockUsers = _Users.filter(user => {
        if(name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users:mockUsers
          }]);
        }, 1000);
      });
    });
  }
}