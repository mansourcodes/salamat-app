import { DoctorInterface } from "src/app/services/doctors/doctor";


export const doctorsFeatureKey = 'doctors';


export interface DoctorsState {
    doctors: DoctorInterface[];
}

export const initialState: DoctorsState = {
    doctors: [
        {
            _id: '1',
            name: 'Dr. Ali Ahmed',
            name_alt: 'دكتور علي احمد',
            photo: 'photo_5e49b90be65ce.jpg',
            speciality: 8,
        },
        {
            _id: '2',
            name: 'Dr. Ali Ahmed',
            name_alt: 'دكتور علي احمد',
            photo: 'photo_5e49b90be65ce.jpg',
            speciality: 8,
        },
        {
            _id: '3',
            name: 'Dr. Ali Ahmed',
            name_alt: 'دكتور علي احمد',
            photo: '',
            speciality: 8,
        },

    ]
};