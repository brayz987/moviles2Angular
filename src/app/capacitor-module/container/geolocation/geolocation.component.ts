import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent {

  public cordinates: cordinates = {
    latitude: 0,
    longitude: 0,
    accuracy: 0
  }

  public getGeo() {
    try {
      Geolocation.getCurrentPosition().then(res => {
        this.cordinates = {
          latitude: res.coords.latitude,
          longitude: res.coords.longitude,
          accuracy: res.coords.accuracy
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

}

interface cordinates {
  latitude: number,
  longitude: number,
  accuracy: number
}
