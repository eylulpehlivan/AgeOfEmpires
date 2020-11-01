import { Action } from '@ngrx/store';

export enum ActionTypes {
  SAVE = '[Character] Save',
  SAVE_SUCCESS = '[Character] Save Success',
  UPDATE = '[Character] Update',
  UPDATE_SUCCESS = '[Character] Update Success',
  FAIL = '[Character] Fail'
}

export class Save implements Action {
  readonly type = ActionTypes.SAVE;
  constructor() { }
}

export class SaveSuccess implements Action {
  readonly type = ActionTypes.SAVE_SUCCESS;
  constructor(public payload: any) { }
}

export class Update implements Action {
  readonly type = ActionTypes.UPDATE;
  constructor(public payload: any) { }
}

export class UpdateSuccess implements Action {
  readonly type = ActionTypes.UPDATE_SUCCESS;
  constructor(public payload: any) { }
}

export class Fail implements Action {
  readonly type = ActionTypes.FAIL;
  constructor(public payload: any) { }
}

export type All =
  | Save
  | SaveSuccess
  | Update
  | UpdateSuccess
  | Fail;