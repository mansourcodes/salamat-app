export interface LanguageInterface {
    text: string;
    key: string;
    flag: string
}

export interface SettingInterface {
    language: LanguageInterface;
    languageList: LanguageInterface[];
}
