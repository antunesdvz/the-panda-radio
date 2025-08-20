import { Injectable } from "@angular/core";
import { ThePandaConfiguration } from "../../enviroment/enviroment";

@Injectable({
  providedIn: 'root'
})
export class PandaRadioService {

  constructor() {}

  async obterUrlLogin(): Promise<string> {
    const codigoAleatorio = '';
    const authPoint = `${ThePandaConfiguration.authEndpoint}?`;
    const clientId = `client_id=${ThePandaConfiguration.clientId}&`;
    const urlRedirect = `redirect_uri=${ThePandaConfiguration.redirectUrl}&`;
    const scopes = `scopes=${ThePandaConfiguration.scopes.join('%20')}`;
    const codeChallengeMethod = 'code_challenge_method=S256';
    const codeChallengeParam = 'code_challenge' + codigoAleatorio + '&';
    const responseType = 'response_type=code';

    return `${authPoint}${clientId}${urlRedirect}${scopes}${codeChallengeMethod}${codeChallengeParam}${responseType}`;
  }

  async gerarCodigoAleatorio(p0: number): Promise<any> {
    const codigoVerificador = this.gerarCodigoAleatorio(128);
    const codchallenge = await this.gerarHash(codigoVerificador);

    return codchallenge;
  }
  gerarHash(codigoVerificador: Promise<any>) {
    throw new Error("Method not implemented.");
  }
}