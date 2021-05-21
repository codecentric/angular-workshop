import {createAction, props} from "@ngrx/store";
import {Farm} from "../../shared/models/farm";

export const addFarmAction = createAction("addFarm", props<Farm>())
export const selectFarmAction = createAction("selectFarm", props<Farm>())
export const deselectFarmAction = createAction("deselectFarm")
