export type Example = string;
export interface FetchPayload {
  name: string;
}

export interface FetchAction {
  type: string;
  payload: FetchPayload;
}
