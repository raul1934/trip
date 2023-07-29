import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  @ViewChild(GoogleMap) map!: GoogleMap;
  @Input() markers: Array<google.maps.LatLng> = [];

  ngAfterViewInit(): void {

  }

  options: google.maps.MapOptions = {
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    disableDefaultUI: true,
    maxZoom: 16,
    minZoom: 2,
    styles: [
      {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#202c3e"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "gamma": 0.01
          },
          {
            "lightness": 20
          },
          {
            "weight": "1.39"
          },
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "weight": "0.96"
          },
          {
            "saturation": "9"
          },
          {
            "visibility": "on"
          },
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 30
          },
          {
            "saturation": "9"
          },
          {
            "color": "#29446b"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "saturation": 20
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 20
          },
          {
            "saturation": -20
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "lightness": 10
          },
          {
            "saturation": -30
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#193a55"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "saturation": 25
          },
          {
            "lightness": 25
          },
          {
            "weight": "0.01"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "lightness": -20
          }
        ]
      }
    ]
  };

  markerOption: google.maps.MarkerOptions = {
    opacity: 1,
    label: {
      color: '#fff',
      text: '10',
      fontWeight: "700"
    },
    animation: google.maps.Animation.DROP,
    icon: {
      url: '/assets/images/PIN.png',
    }
  };

}
