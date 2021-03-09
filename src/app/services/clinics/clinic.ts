export interface ClinicInterface {
    id: number;
    name: string;
    name_alt: string;
    logo: string;
    branches: { id: number; }[];
    phone: string;
}


