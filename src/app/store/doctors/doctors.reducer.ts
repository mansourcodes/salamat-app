import { Action, createReducer, on } from '@ngrx/store';
import { createDoctor, destroyDoctor, updateDoctor } from './doctors.actions';
import { initialState, doctorsFeatureKey } from './doctors.state';
import * as uuid from 'uuid';



const _doctorsReducer = createReducer(
  initialState,
  on(createDoctor, (state, action) => {

    const newItem = { ...action.data };
    newItem._id = uuid.v4();

    return {
      ...state,
      [doctorsFeatureKey]: [
        ...state[doctorsFeatureKey],
        newItem
      ]
    }

  }),
  on(updateDoctor, (state, action) => {

    const updatedItems = state[doctorsFeatureKey].map(item => {
      return action.data._id === item._id ? action.data : item;
    })

    return {
      ...state,
      [doctorsFeatureKey]: [
        ...updatedItems
      ]
    }
  }),
  on(destroyDoctor, (state, { id }) => {

    const afterDestroyItems = state[doctorsFeatureKey].filter(item => {
      return item._id !== id;
    })

    return {
      ...state,
      [doctorsFeatureKey]: [
        ...afterDestroyItems
      ]
    }
  }),
);

export function doctorsReducer(state, action) {
  return _doctorsReducer(state, action);
}