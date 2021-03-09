import { UserInterface } from "../auth/user.model";
import { BranchInterface } from "../branches/branch";
import { DoctorInterface } from "../doctors/doctor";
import { PatientInterface } from "../patient/patient";

export interface AppoInterface {

    id: number;
    patient_id: number;
    doctor_id: number;
    branch_id: number;
    date: Date;
    time: Date;
    notes: string;


    status?: number;
    duration?: number;
    created_at?: string;
    end_time?: string;
    price?: number;
    service?: string;
    created_by?: string;
    updated_by?: string;
    confirmed_at?: string;
    check_in_at?: string;
    invoice_id?: string;
    source?: string;

    patient: PatientInterface;
    branch: BranchInterface;
    doctor: DoctorInterface;
    createdBy: UserInterface;
}
