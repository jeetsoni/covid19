    export interface Delta {
        confirmed: number;
        deceased: number;
        recovered: number;
    }

    export interface DistrictData {
        district: string;
        notes: string;
        active: number;
        confirmed: number;
        deceased: number;
        recovered: number;
        delta: Delta;
    }

    export interface District {
        state: string;
        statecode: string;
        districtData: DistrictData[];
    }

