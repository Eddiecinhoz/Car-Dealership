import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) {}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        console.log('Fetching car with ID:', {id});
        return {
            id,
            car: this.carsService.findById(id)
        
        }
    }

    @Post()
    createCar( @Body() body: any) {
        return {
            ok: body,
        };
    }

     @Patch(':id')
     updateCar( @Body() body: any) {
         return {
             ok: true,
             body
         };
     }

     @Delete(':id')
     deleteCar(@Param('id', ParseIntPipe) id: number) {
         return {
             ok: true,
             id
         };
     }

}
