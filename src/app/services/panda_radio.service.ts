import { Injectable } from "@angular/core";
import { ThePandaConfiguration } from "../../enviroment/enviroment";

@Injectable({
  providedIn: 'root'
})
export class PandaRadioService {

  constructor() {}

  async obterUrlLogin(): Promise<string> {

    const authPoint = `${ThePandaConfiguration.authEndpoint}?`;
  }
}