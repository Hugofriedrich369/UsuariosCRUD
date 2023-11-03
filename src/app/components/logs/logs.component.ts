import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILog } from 'src/app/interfaces/ILog';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {

  logs: ILog[];


  constructor(private logsService: LogsService, private router: Router) {
    this.logs = logsService.logs;
    console.log(this.logs)
  }

  limpar() {
    this.logsService.limpar();
    this.logs = this.logsService.logs;
  }

  redirecionar(rota: string) {
    this.router.navigate([rota]);
  }
}
