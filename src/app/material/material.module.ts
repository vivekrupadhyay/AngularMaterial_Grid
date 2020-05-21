import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';

const MatrialComponents = [MatTableModule, MatIconModule,MatButtonModule];
@NgModule({
  imports: [MatrialComponents],
  exports: [MatrialComponents],
})
export class MaterialModule {}