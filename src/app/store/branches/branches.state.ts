import { BranchInterface } from "src/app/services/branches/branch";


export const branchesFeatureKey = 'branches';


export interface BranchesState {
    branches: BranchInterface[];
}

export const initialState: BranchesState = {
    branches: []
};