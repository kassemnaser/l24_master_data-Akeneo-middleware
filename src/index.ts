import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const l24_master_dataFunc: HttpFunction = (req, res) => {
  res.send('Hello, World');
};
