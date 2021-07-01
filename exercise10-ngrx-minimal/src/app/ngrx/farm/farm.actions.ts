import { createAction, props } from '@ngrx/store';

import { Farm } from 'src/app/shared/models/farm';

// export const Action = createAction("NAME", props<PAYLOADTYP>())
export const addFarmAction = createAction('addFarm', props<Farm>());
export const selectFarmAction = createAction('selectFarm', props<Farm>());
export const deselectFarmAction = createAction('deselectFarm');
