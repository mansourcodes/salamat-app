import { BranchInterface } from "src/app/services/branches/branch";
import { ClinicInterface } from "src/app/services/clinics/clinic";
import { DoctorInterface } from "src/app/services/doctors/doctor";

export const appoformFeatureKey = 'appoform';

export interface AppoformState {

    clinic: ClinicInterface;
    doctor: DoctorInterface;
    branch: BranchInterface;

    clinic_id: number;
    doctor_id: number;
    branch_id: number;
    date: string;
    time: string;
    notes: string;

}

export const initialState: AppoformState = {
    clinic: null,
    doctor: null,
    branch: null,

    clinic_id: 0,
    branch_id: 0,
    doctor_id: 0,
    date: '',
    time: '',
    notes: '',

};
