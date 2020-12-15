import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// Material Form Controls
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [MatInputModule, MatIconModule, MatFormFieldModule],
})
export class MaterialMiniFormModule {}
