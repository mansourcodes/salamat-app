import { ClinicInterface } from "src/app/services/clinics/clinic";


export const clinicsFeatureKey = 'clinics';


export interface ClinicsState {
    clinics: ClinicInterface[];
}

export const initialState: ClinicsState = {
    clinics: []
};