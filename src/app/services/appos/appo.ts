
export interface AppoInterface {

    id: number;
    patient_id: number;
    doctor_id: number;
    branch_id: number;
    date: string;
    time: string;
    notes: null;


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
}
