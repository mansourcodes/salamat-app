import { DoctorInterface } from "src/app/services/doctors/doctor";


export const doctorsFeatureKey = 'doctors';


export interface DoctorsState {
    doctors: DoctorInterface[];
}

export const initialState: DoctorsState = {
    doctors: [
        {
            _id: '32ewq',
            name: 'asddasda',
            name_alt: 'asddasda',
            photo: 'asddasda',
            speciality: 1,
        },
        {
            _id: '4354',
            name: 'asddasda',
            name_alt: 'asddasda',
            photo: 'asddasda',
            speciality: 1,
        },
        {
            _id: '32ef34rdwq',
            name: 'asddasda',
            name_alt: 'asddasda',
            photo: 'asddasda',
            speciality: 1,
        },

    ]
};