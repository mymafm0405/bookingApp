import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
})
export class TestComponent {
  constructor(private modalCtrl: ModalController) {}
  onClose() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onGreat() {
    this.modalCtrl.dismiss({ message: 'Great job Mahmoud!' }, 'confirm');
  }
}
