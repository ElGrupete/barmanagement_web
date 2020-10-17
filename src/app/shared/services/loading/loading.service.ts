import { LoadingComponent } from './../../components/loading/loading.component';
import { MatSpinner, MatProgressSpinner } from '@angular/material/progress-spinner';
import { Injectable } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  spinnerRef: OverlayRef = this.cdkSpinnerCreate();

  constructor(private overlay: Overlay) { }

  private cdkSpinnerCreate(): OverlayRef {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'overlay',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    });
  }

  showLoading(): void {
    this.spinnerRef.attach(new ComponentPortal(LoadingComponent));
  }

  hideLoading(): void {
    this.spinnerRef.detach();
  }

  overlayIsAttached(): boolean {
    return this.spinnerRef.hasAttached();
  }
}
