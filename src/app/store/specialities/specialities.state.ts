import { SpecialityInterface } from "src/app/services/specialities/speciality";


export const specialitiesFeatureKey = 'specialities';


export interface SpecialitiesState {
    specialities: SpecialityInterface[];
}

export const initialState: SpecialitiesState = {
    specialities: []
};