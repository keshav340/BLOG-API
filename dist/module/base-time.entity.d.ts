import { BaseEntity } from 'typeorm';
export declare abstract class BaseTimeEntity extends BaseEntity {
    createdAt: Date;
    updatedAt: Date;
}
