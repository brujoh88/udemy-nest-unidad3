import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
@Injectable()
export class CarsService {
    private cars : Car[] = [
        { id:uuid() , brand: 'Toyota', model: 'Corolla' }, 
        { id:uuid() , brand: 'Ford', model: 'Focus' }, 
        { id:uuid() , brand: 'Honda', model: 'Civic' }, 
        { id:uuid() , brand: 'Renault', model: 'Clio' }];

    public findAll() {
        return this.cars;
    }

    public findOneById( id: string ) {
        const car = this.cars.find( car => car.id === id );
        if ( !car ) throw new NotFoundException(`Car with id ${ id } not found` );
        return car;
    }

    public create( createCarDto: CreateCarDto ) {
        const newCar: Car = { id: uuid(), ...createCarDto };
        this.cars.push( newCar );
        return newCar;
    }
}
