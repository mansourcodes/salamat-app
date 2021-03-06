import { TimetableInterface } from "src/app/services/timetables/timetable";


export const timetablesFeatureKey = 'timetables';


export interface TimetablesState {
    timetables: TimetableInterface[];
}

export const initialState: TimetablesState = {
    timetables: []
};