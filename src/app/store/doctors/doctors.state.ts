import { DoctorInterface } from "src/app/services/doctors/doctor";


export const doctorsFeatureKey = 'doctors';


export interface DoctorsState {
    doctors: DoctorInterface[];
}

export const initialState: DoctorsState = {
    doctors: []
};