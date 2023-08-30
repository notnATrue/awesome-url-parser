import { NextFunction, Request, Response } from 'express';
import { ISliceUrl } from '../common/interface';
import { ParseUrlService } from '../services/parse-url.service';

export const route = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const params = { ...req.params, ...req.query, ...req.body } as ISliceUrl;
    const parseUrlService = new ParseUrlService();
    const slicedUrl: string = await parseUrlService.concatUrl(params.url);

    res.status(201).json(slicedUrl);
  } catch (e) {
    next(e);
  }
};

export default route;
