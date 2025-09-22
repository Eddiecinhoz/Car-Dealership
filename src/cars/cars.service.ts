import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars = [
        // {
        //     id: uuid(),
        //     model: 'Toyota',
        //     brand: 'Corolla'
        // }
    ]


    findAll() {
        return this.cars;
    }

    findById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with given ID ${id} not found`);
        return car;
    }

    create( createCarDto: CreateCarDto ) {
        const car = { id: uuid(), ...createCarDto };
        this.cars.push( car );
        return car;
    }

    update( id: string, updateCarDto: UpdateCarDto ) {
        let carDB = this.findById( id );
        this.cars = this.cars.map( car => {
            if ( car.id === id ) {
                console.log('Existing car:');
                carDB = { ...carDB, ...updateCarDto, id };
                return carDB;
            }
            return car;
        } )
        return carDB;
    }


    delete( id: string ) {
        const carDB = this.findById( id );
        this.cars = this.cars.filter( car => car.id !== id );
        return 
    }


    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars;
    }

}
