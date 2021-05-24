import { StatisticsService } from './statistics.service';
export declare class StadisticsResolver {
    private readonly _stadisticsService;
    constructor(_stadisticsService: StatisticsService);
    getStadistics(): Promise<import("./interfaces").IStatistics>;
}
