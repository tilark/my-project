import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {LoginUsers, Users} from './data/user';

let _Users = Users;
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

    //分页获取用户列表
    mock.onGet('/user/listpage').reply(config => {
      let {page, name} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 *(page -1));
      return new Promise((resolve) =>{
        setTimeout(() => {
          resolve([200, {
            total:total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });
    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let {id, name, addr, age, birth, sex} = config.params;
      _Users.some(u =>{
        if(u.id === id){
          u.name = name;
          u.addr = addr;
          u.age = age;
          u.birth = birth;
          u.sex = sex;
          return true;
        }
      });
      return new Promise((resolve, reject) =>{
        setTimeout(() => {
          resolve([200, {
            code:200,
            msg:'编辑成功'
          }]);
        }, 500);
      });
    })
  }
}