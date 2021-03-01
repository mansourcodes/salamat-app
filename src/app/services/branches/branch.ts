import { ClinicInterface } from "../clinics/clinic";

export interface BranchInterface {
    id: number;
    clinic_id: number;
    name: string;
    name_alt: string;
    address: string;
    location: string;
    schedule_starting: Date;
    schedule_ending: Date;
    clinic: ClinicInterface;
}


