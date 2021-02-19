interface languageInterface {
    text: string;
    key: string;
    flag: string
}

export interface SettingInterface {
    language: languageInterface;
    languageList: languageInterface[];
}

export class Setting {
}
