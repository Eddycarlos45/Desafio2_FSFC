import { Controller, Get } from '@nestjs/common';
import { Routes } from './entities/Routes';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
    constructor(private routesService: RoutesService){}

    @Get()
    async getRoutes(): Promise<Routes[]> {
        return this.routesService.getRoutes()
    }
}
