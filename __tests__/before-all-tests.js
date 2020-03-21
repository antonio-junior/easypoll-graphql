import { Answer, Poll, User } from '../src/models';
import config from './config-sequelize';

config();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = async () => {
  await Answer.destroy({ truncate: true, force: true });
  await Poll.destroy({ truncate: true, force: true });
  await User.destroy({ truncate: true, force: true });
};
