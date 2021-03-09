import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { AppoInterface } from "src/app/services/appos/appo";


export const apposFeatureKey = 'appos';


export interface ApposState extends EntityState<AppoInterface> { }

export const apposAdapter = createEntityAdapter<AppoInterface>();

export const initialState: ApposState = apposAdapter.getInitialState();