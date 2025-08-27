import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        { id:1 , brand: 'Toyota', model: 'Corolla' }, 
        { id:2 , brand: 'Ford', model: 'Focus' }, 
        { id:3 , brand: 'Honda', model: 'Civic' }, 
        { id:4 , brand: 'Renault', model: 'Clio' }];

    public findAll() {
        return this.cars;
    }

    public findOneById( id: number ) {
        return this.cars.find( car => car.id === id );
    }
}
