import { BranchInterface } from "src/app/services/branches/branch";
import { ClinicInterface } from "src/app/services/clinics/clinic";
import { DoctorInterface } from "src/app/services/doctors/doctor";

export const appoformFeatureKey = 'appoform';

export interface AppoformState {

    clinic_id: number;
    clinic: ClinicInterface;

    branch_id: number;
    branch: BranchInterface;

    doctor_id: number;
    doctor: DoctorInterface;

    date: string;
    time: string;
    notes: string;

}

export const initialState: AppoformState = {
    clinic_id: 0,
    clinic: null,

    branch_id: 0,
    branch: null,

    doctor_id: 0,
    doctor: null,


    date: '',
    time: '',
    notes: '',

};
