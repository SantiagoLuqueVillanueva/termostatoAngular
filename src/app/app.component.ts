import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ControlTemperatureComponent } from "./component/control-temperature/control-temperature.component";
import { DisplayTemperatureComponent } from "./component/display-temperature/display-temperature.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    ControlTemperatureComponent,
    DisplayTemperatureComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "termostato";

  temperature = 20;
  umbral = 25;

  onCambioUmbralOutput(umbral: number) {
    this.umbral = umbral;
  }

  onCambioTemperaturaOutput(tempUpdate: number) {
    this.temperature = tempUpdate;
  }
}
