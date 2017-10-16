import * as actions from './actions';
import * as types from './types';


describe('actions', () => {
    it('should create an action to register', () => {
      const user = {}
      const expectedAction = {
        type: types.REGISTER,
        payload:user
      }
      expect(actions.register(user)).toEqual(expectedAction)
    })
  })