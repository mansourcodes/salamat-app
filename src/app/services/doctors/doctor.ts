import { BranchInterface } from "../branches/branch";
import { SpecialityInterface } from "../specialities/speciality";

export interface DoctorInterface {
    id: number;
    name: string;
    name_alt: string;
    photo: string;
    speciality: number;
    specialization: SpecialityInterface;

    branches_ids: number[];
    branches: { id: number, clinic_id: number }[];
}


