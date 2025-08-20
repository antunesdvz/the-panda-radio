import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { PandaRadioService } from "../../services/panda_radio.service";

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent {

  servicePandaRadio = inject(PandaRadioService);
  anoAtual = new Date().getFullYear();

  async fazerLogin() {
    const url = await this.servicePandaRadio.obterUrlLogin();
  }
}