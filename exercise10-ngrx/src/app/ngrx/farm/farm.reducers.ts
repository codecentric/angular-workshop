import {Action, createAction, createReducer, on, props} from "@ngrx/store";
import {Farm} from "../../shared/models/farm";
import {addFarmAction, deselectFarmAction, selectFarmAction} from "./farm.actions";

export interface FarmState {
  farms: Farm[];
  selectedFarm: Farm;
}

const initialState: FarmState = {
  farms: [
    {
      name: "Rinderhof",
      location: "Essen",
      description: "Dies ist ein Bauernhof, welcher für die schönsten Rinder in ganz Essen bekannt ist"
    },
    {
      name: "Schweinezucht",
      location: "Dortmund",
      description: "Hat einen überdurchschnittlich hohen Schweinefutterverbrauch"
    }
  ],
  selectedFarm: null
}

const _farmReducer = createReducer(
  initialState,
  on(addFarmAction, (state, props) => {
    return {
      ...state,
      farms: [...state.farms, props]
    }
  }),
  on(selectFarmAction, (state, props) => {
    return {
      ...state,
      selectedFarm: props
    }
  }),
  on(deselectFarmAction, (state) => {
    return {
      ...state,
      selectedFarm: null
    }
  })
)

export function farmReducer(state: FarmState | undefined, action: Action) {
  return _farmReducer(state, action)
}
