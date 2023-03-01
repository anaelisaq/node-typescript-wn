import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 5000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupController();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupController(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}

//seprar a inicialização permitindo quem inicie tenha controle de como ele vai ser inicializado
