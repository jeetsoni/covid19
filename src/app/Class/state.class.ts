    export interface CasesTimeSery {
        dailyconfirmed: string;
        dailydeceased: string;
        dailyrecovered: string;
        date: string;
        totalconfirmed: string;
        totaldeceased: string;
        totalrecovered: string;
    }

    export interface Statewise {
        active: string;
        confirmed: string;
        deaths: string;
        deltaconfirmed: string;
        deltadeaths: string;
        deltarecovered: string;
        lastupdatedtime: string;
        recovered: string;
        state: string;
        statecode: string;
        statenotes: string;
    }

    export interface Tested {
        positivecasesfromsamplesreported: string;
        samplereportedtoday: string;
        source: string;
        testsconductedbyprivatelabs: string;
        totalindividualstested: string;
        totalpositivecases: string;
        totalsamplestested: string;
        updatetimestamp: string;
    }

    export interface State {
        cases_time_series: CasesTimeSery[];
        statewise: Statewise[];
        tested: Tested[];
    }

