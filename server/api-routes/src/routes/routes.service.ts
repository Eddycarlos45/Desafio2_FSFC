import { Injectable } from '@nestjs/common';
import { Routes } from './entities/Routes';

@Injectable()
export class RoutesService {
  private routes: Routes[] = [
    {
      title: 'primeira routa',
      startPosition: {
        latitude: -15.82594,
        longitude: -47.92923,
      },
      endPosition: {
        latitude: -15.8261,
        longitude: -47.92911,
      },
    },
    {
      title: 'segunda routa',
      startPosition: {
        latitude: -15.82615,
        longitude: -47.92907,
      },
      endPosition: {
        latitude: -15.82637,
        longitude: -47.92889,
      },
    },
    {
      title: 'terceira routa',
      startPosition: {
        latitude: -15.82594,
        longitude: -47.92923,
      },
      endPosition: {
        latitude: -15.82651,
        longitude: -47.92878,
      },
    },
    {
      title: 'quarta routa',
      startPosition: {
        latitude: -15.82655,
        longitude: -47.92875,
      },
      endPosition: {
        latitude: -15.82665,
        longitude: -47.92867,
      },
    },
    {
      title: 'quinta routa',
      startPosition: {
        latitude: -15.82636,
        longitude: -47.92827,
      },
      endPosition: {
        latitude: -15.82615,
        longitude: -47.92798
      },
    },
  ];

  async getRoutes() {
      return this.routes
  }
}
