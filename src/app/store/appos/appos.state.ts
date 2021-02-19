import { AppoInterface } from "src/app/services/appos/appo";


export const apposFeatureKey = 'appos';


export interface ApposState {
    appos: AppoInterface[];
}

export const initialState: ApposState = {
    appos: []
}