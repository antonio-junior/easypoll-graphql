import {
  HasMany,
  CreatedAt,
  Table,
  Column,
  DataType,
  ForeignKey,
  Model
} from 'sequelize-typescript';

import Answer from './Answer';
import Quiz from './Quiz';
import User from './User';

@Table({
  tableName: 'results'
})
export default class Result extends Model<Result> {
  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => Quiz)
  @Column(DataType.INTEGER)
  quizId!: number;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt!: Date;

  @HasMany(() => Answer, 'resultId')
  answers!: Answer[];
}
