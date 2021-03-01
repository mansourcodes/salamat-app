export const appoformFeatureKey = 'appoform';

export interface AppoformState {
    clinic_id: number;
    doctor_id: number;
    branch_id: number;
    date: string;
    time: string;
    notes: string;

}

export const initialState: AppoformState = {
    clinic_id: 0,
    branch_id: 0,
    doctor_id: 0,
    date: '',
    time: '',
    notes: '',

};
