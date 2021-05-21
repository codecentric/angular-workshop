import {FarmState} from "./farm.reducers";
import {createSelector} from "@ngrx/store";

export interface AppState {
  farmFeature: FarmState
}

export const selectFarmFeature = (state: AppState) => state.farmFeature
export const selectFarms = createSelector(selectFarmFeature, (state: FarmState) => state.farms)
export const selectSelectedFarm = createSelector(selectFarmFeature, (state: FarmState) => state.selectedFarm)
