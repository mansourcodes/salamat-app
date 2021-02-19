
import { User } from "src/app/services/auth/user.model";


export const authFeatureKey = 'auth';


export interface AuthState {
    user: User | null
}

export const initialState: AuthState = {
    user: null
};