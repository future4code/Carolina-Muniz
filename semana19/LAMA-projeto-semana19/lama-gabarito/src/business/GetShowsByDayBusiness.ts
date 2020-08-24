import { ShowDatabase } from "../data/ShowDatabase";
import { Show, WeekDay } from "../model/Show";

export class GetShowsByDayBusiness {
  constructor(private showDatabase: ShowDatabase) {}

  public async execute(weekDay: WeekDay): Promise<GetShowsByDayBusinessOutput> {
    return { result: await this.showDatabase.getShowsByWeekDay(weekDay) };
  }
}

export interface GetShowsByDayBusinessOutput {
  result: GetShowsByDayBusinessOutputItem[];
}

export interface GetShowsByDayBusinessOutputItem {
  id: string;
  startTime: moment.Moment;
  endTime: moment.Moment;
  weekDay: number;
  bandId: string;
  mainGenre: string;
}
