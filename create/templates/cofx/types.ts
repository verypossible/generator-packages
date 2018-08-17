export interface FetchExamplePayload {
  name: string;
}

export interface FetchExampleAction {
  type: string;
  payload: FetchExamplePayload;
}

export type Example = string;

export interface SetExampleAction {
  type: string;
  payload: Example;
}
