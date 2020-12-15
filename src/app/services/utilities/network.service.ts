import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx'
import { BehaviorSubject, fromEvent, merge, Observable, of } from 'rxjs';
import { ToastController, Platform } from '@ionic/angular';
import { mapTo } from 'rxjs/operators';

export enum ConnectionStatus {
  Offline,
  Online
}

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject(ConnectionStatus.Offline);

  constructor(private network: Network, private toastController: ToastController, private platform: Platform) {


    this.platform.ready().then(() => {
      this.initializeNetworkEvents();

      let status = ConnectionStatus.Online;
      if (this.platform.is('cordova')) {
        status = this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
      } else {
        status = (navigator.onLine) ? ConnectionStatus.Online : ConnectionStatus.Offline;
      }
      this.status.next(status);

    });


  }
  /**
   * 
   */
  public initializeNetworkEvents() {


    var onlineStatusObservable: Observable<any>;
    var offlineStatusObservable: Observable<any>;

    if (this.platform.is('cordova')) {
      onlineStatusObservable = this.network.onConnect();
      offlineStatusObservable = this.network.onDisconnect();
    } else {
      onlineStatusObservable = fromEvent(window, 'online');
      offlineStatusObservable = fromEvent(window, 'offline');
    }

    offlineStatusObservable.subscribe(() => {
      if (this.status.value !== ConnectionStatus.Offline) {
        this.updateNetworkStatus(ConnectionStatus.Offline);
      }
    });

    onlineStatusObservable.subscribe(() => {
      if (this.status.value !== ConnectionStatus.Online) {
        this.updateNetworkStatus(ConnectionStatus.Online);
      }
    });

    let toast = this.toastController.create({
      message: ` Welcome `,
      duration: 1,
      position: 'bottom'
    });
    toast.then(toast => toast.present());

  }
  /**
   * 
   * @param status 
   */
  private async updateNetworkStatus(status: ConnectionStatus) {
    this.status.next(status);

    let connection = status == ConnectionStatus.Offline ? 'Offline' : 'Online';
    let toast = this.toastController.create({
      message: `You are now ${connection}`,
      duration: 3000,
      position: 'bottom'
    });
    toast.then(toast => toast.present());
  }

  public onNetworkChange(): Observable<ConnectionStatus> {
    return this.status.asObservable();
  }

  public getCurrentNetworkStatus(): ConnectionStatus {
    var statusValue = this.status.value
    return statusValue;
  }
}