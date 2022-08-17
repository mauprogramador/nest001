import { CreateDog } from './entity/create.dog';
import { DataSource } from 'typeorm';
export declare const dogsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<CreateDog>;
    inject: string[];
}[];