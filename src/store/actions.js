import {TABLE_RESIZE} from './action.types';

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  };
}
export function rowResize(data) {}
