import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';
import { ObserveVisibilityItemDirective } from '../shared/directives/observe-visibility/observe-visibility.directive';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsComponent implements AfterViewInit {

  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info!: MapInfoWindow;
  @ViewChild("content", { static: false, read: ElementRef  }) content!: ElementRef;
  @ViewChildren(ObserveVisibilityItemDirective) tripSections!: QueryList<ObserveVisibilityItemDirective>;
  @ViewChild("parent", { static: false, read: ElementRef }) parent!: ElementRef;

  protected selectedIndex = -1;
  private scrolling = false;
  protected zoom = 10;

  protected flightInfoVisible = false;
  protected tripInfoVisible = false;
  protected locationInfoVisible = false;
  protected airBnbInfoVisible = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

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

  markers: any[] = [
    { position: { lat: 48.8584, lng: 2.2945 } },
    { position: { lat: 40.7128, lng: -74.0060 } },
    { position: { lat: 51.5074, lng: -0.1278 } },
    { position: { lat: 34.0522, lng: -118.2437 } },
    { position: { lat: 35.6895, lng: 139.6917 } },
    { position: { lat: -33.8651, lng: 151.2099 } },
    { position: { lat: 19.4326, lng: -99.1332 } },
    { position: { lat: 55.7558, lng: 37.6176 } },
    { position: { lat: 41.9028, lng: 12.4964 } },
    { position: { lat: 52.5200, lng: 13.4050 } },
    { position: { lat: 37.7749, lng: -122.4194 } },
    { position: { lat: -22.9068, lng: -43.1729 } },
    { position: { lat: -34.6037, lng: -58.3816 } },
    { position: { lat: 25.2048, lng: 55.2708 } },
    { position: { lat: -23.5505, lng: -46.6333 } },
    { position: { lat: 48.8566, lng: 2.3522 } },
    { position: { lat: 37.9838, lng: 23.7275 } },
    { position: { lat: 38.9072, lng: -77.0369 } },
    { position: { lat: 59.3293, lng: 18.0686 } },
    { position: { lat: -1.2864, lng: 36.8172 } }
  ];

  filteredMarkers: any[] = [];

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

  ngAfterViewInit(): void {
    this.setAllMarkers();

    this.map.zoomChanged.subscribe(()=>{
      console.log(this.map.getZoom());
    })
  }

  getBounds(markers: any) {
    let north;
    let south;
    let east;
    let west;

    for (const marker of markers) {
      north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
      south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
      east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
      west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
    };

    const bounds = { north, south, east, west };

    return bounds;
  }

  setAllMarkers() {
    const bounds = this.getBounds(this.markers);
    let width = this.content.nativeElement.offsetWidth;
    this.map.googleMap?.fitBounds(bounds, { left: width + 30, right: 30 });
  }

  setMarker() {
    const bounds = this.getBounds(this.getRandomValuesFromArray(this.markers, 1));
    let width = this.content.nativeElement.offsetWidth;
    this.map.googleMap?.fitBounds(bounds,0);
    this.map.googleMap?.panBy(-(width/2),0)
    this.changeDetectorRef.detectChanges();
  }

  getRandomValuesFromArray<T>(array: T[], x: number): T[] {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, x);
  }

  currentLocationIndex(index: number) {
    if (!this.scrolling) {
      this.selectedIndex = index;
    }
  }

  navIndexChanged(index: number) {
    this.scrolling = true;
    let section = this.tripSections.get(index);
    this.selectedIndex = index;
    var scrollDiv = section?.elementRef.nativeElement.offsetTop;
    (this.parent.nativeElement as HTMLElement).scrollTo({
      top: scrollDiv, behavior: 'smooth'
    });
    setTimeout(() => {
      this.scrolling = false;
    }, 600);
  }

  seeAllLocations() {
    (this.parent.nativeElement as HTMLElement).scrollTo({
      top: 0, behavior: 'smooth'
    });

    this.setAllMarkers();
  }

  openFlightInfoModal(){
    this.tripInfoVisible = false;
    this.locationInfoVisible = false;
    this.airBnbInfoVisible = false;
    setTimeout(()=>{
      this.flightInfoVisible = true;
      this.setMarker();
    },300);
  }

  openTripInfoModal(){
    this.flightInfoVisible = false;
    this.locationInfoVisible = false;
    this.airBnbInfoVisible = false;
    setTimeout(()=>{
      this.tripInfoVisible = true;
      this.setAllMarkers();
    },300);
  }

  openLocationInfoModal(){
    this.flightInfoVisible = false;
    this.tripInfoVisible = false;
    this.airBnbInfoVisible = false;
    setTimeout(()=>{
       this.locationInfoVisible = true;
       this.setMarker();
    },300);
  }

  openAirBnbInfoModal(){
    this.flightInfoVisible = false;
    this.tripInfoVisible = false;
    this.locationInfoVisible = false;
    setTimeout(()=>{
      this.airBnbInfoVisible = true;
       this.setMarker();
    },300);
  }

}
