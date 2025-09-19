import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: uuid(),
            model: 'Toyota',
            brand: 'Corolla'
        },
        {
            id: uuid(),
            model: 'Honda',
            brand: 'Civic'
        },
        {
            id: uuid(),
            model: 'Jeep',
            brand: 'Cherokee'
        }
    ]


    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with given ID ${id} not found`);
        return car;
    }

}
