    export class CasesTimeSery {
        dailyconfirmed: string;
        dailydeceased: string;
        dailyrecovered: string;
        date: string;
        totalconfirmed: string;
        totaldeceased: string;
        totalrecovered: string;
    }

    export class Statewise {
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

    export class Tested {
        positivecasesfromsamplesreported: string;
        samplereportedtoday: string;
        source: string;
        testsconductedbyprivatelabs: string;
        totalindividualstested: string;
        totalpositivecases: string;
        totalsamplestested: string;
        updatetimestamp: string;
    }

    export class Total {
        cases_time_series: CasesTimeSery[];
        statewise: Statewise[];
        tested: Tested[];
    }



