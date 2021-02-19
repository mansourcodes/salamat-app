import { SettingInterface } from "src/app/services/settings/setting";
export const settingsFeatureKey = 'settings';


export interface SettingsState {
    settings: SettingInterface;
}

export const initialState: SettingsState = {
    settings:
    {
        language: { text: 'English', key: 'en', flag: 'assets/flags/en' },
        languageList: [
            { text: 'English', key: 'en', flag: 'assets/flags/en' },
            { text: 'عربي', key: 'ar', flag: 'assets/flags/ar' },
        ]
    }
}