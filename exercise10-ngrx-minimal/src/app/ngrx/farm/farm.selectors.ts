import { FarmState } from './farm.reducers';

export interface AppState {
  farmFeature: FarmState;
}

export const selectFarmFeature = (state: AppState) => state.farmFeature;
