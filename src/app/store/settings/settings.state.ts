import { SettingInterface } from "src/app/services/settings/setting";


export const settingsFeatureKey = 'settings';


export interface SettingsState {
    settings: SettingInterface[];
}

export const initialState: SettingsState = {
    settings: [
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