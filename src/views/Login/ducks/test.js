import * as types from './types';
import login from "./actions";

describe('actions', () => {
    it('should create an action to login', () => {
      const user = {}
      const expectedAction = {
        type: types.LOGIN,
        payload:user
      }
      expect(login(user)).toEqual(expectedAction)
    })
  })