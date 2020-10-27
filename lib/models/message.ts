import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DataType
} from 'sequelize-typescript';


@Table
export class Message extends Model<Message> {

  @Column
  address!: string;

  @Column
  version!: string;

  @Column
  timestamp!: number;

  @Column
  type!: string;

  @Column
  sig!: string;

  @Column
  space?: string;

  @Column
  token?: string;

  @Column(DataType.JSON)
  payload?: string;

  @Column(DataType.JSON)
  metadata?: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
