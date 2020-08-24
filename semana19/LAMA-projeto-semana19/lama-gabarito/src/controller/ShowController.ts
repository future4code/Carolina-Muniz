import { Request, Response } from "express";
import { BaseDatabase } from "../data/base/BaseDatabase";
import { Authorizer } from "../services/Authorizer";
import { UserRole } from "../model/User";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { RegisterShowBusiness } from "../business/RegisterShowBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { InvalidInputError } from "../error/InvalidInput";
import { Show } from "../model/Show";
import { GetShowsByDayBusiness } from "../business/GetShowsByDayBusiness";
export class ShowController {
  public registerShow = async (req: Request, res: Response): Promise<void> => {
    try {
      const authorizer = new Authorizer();
      const data = authorizer.retrieveDataFromToken(
        req.headers.authorization as string
      );

      if (data.userRole !== UserRole.ADMIN) {
        throw new UnauthorizedError("Only admin can access this feature");
      }

      const registerShowBusiness = new RegisterShowBusiness(
        new BandDatabase(),
        new ShowDatabase(),
        new IdGenerator()
      );

      if (
        !req.body.weekDay ||
        !req.body.bandId ||
        !req.body.startTime ||
        !req.body.endTime
      ) {
        throw new InvalidInputError("Missing data");
      }

      const weekDay = Show.toWeekDayEnum(req.body.weekDay);
      const startTime = req.body.startTime;
      const endTime = req.body.endTime;

      if (startTime > endTime) {
        throw new InvalidInputError("Invalid times");
      }

      if (startTime < 8 || endTime > 23) {
        throw new InvalidInputError("Invalid times");
      }

      const input = {
        weekDay,
        bandId: req.body.bandId,
        startTime,
        endTime,
      };

      await registerShowBusiness.execute(input);

      res.sendStatus(200);
    } catch (err) {
      res.status(err.customErrorCode || 400).send({
        message: err.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  };

  public getShowsByDay = async (req: Request, res: Response): Promise<void> => {
    try {
      const getShowsByDayBusiness = new GetShowsByDayBusiness(
        new ShowDatabase()
      );

      const weekDay = Show.toWeekDayEnum(
        req.query && (req.query.weekDay as string)
      );
      const shows = await getShowsByDayBusiness.execute(weekDay);

      res.status(200).send({ shows });
    } catch (err) {
      res.status(err.customErrorCode || 400).send({
        message: err.message,
      });
    } finally {
      await BaseDatabase.destroyConnection();
    }
  };
}
