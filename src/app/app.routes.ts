import { Routes } from '@angular/router';
import { HotelBookingComponent } from './Components/hotel-booking/hotel-booking.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { AdminsDashboardComponent } from './Components/admin-dashboard/admins-dashboard/admins-dashboard.component';
import { HotelsDashboardComponent } from './Components/admin-dashboard/hotels-dashboard/hotels-dashboard.component';
import { DashboardLayoutComponent } from './Components/admin-dashboard/dashboard-layout/dashboard-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { AddHotelComponent } from './Components/admin-dashboard/hotels-dashboard/add-hotel/add-hotel.component';
import { EditHotelComponent } from './Components/admin-dashboard/hotels-dashboard/edit-hotel/edit-hotel.component';
import { DetailsHotelComponent } from './Components/admin-dashboard/hotels-dashboard/details-hotel/details-hotel.component';
import { CountryDashboardComponent } from './Components/admin-dashboard/country-dashboard/country-dashboard.component';
import { RoomsDashboardComponent } from './Components/admin-dashboard/hotels-dashboard/rooms-dashboard/rooms-dashboard.component';
import { AddRoomComponent } from './Components/admin-dashboard/hotels-dashboard/rooms-dashboard/add-room/add-room.component';
import { EditRoomComponent } from './Components/admin-dashboard/hotels-dashboard/rooms-dashboard/edit-room/edit-room.component';
import { FeaturesDashboardComponent } from './Components/admin-dashboard/hotels-dashboard/features-dashboard/features-dashboard.component';
import { PhotosDashboardComponent } from './Components/admin-dashboard/hotels-dashboard/photos-dashboard/photos-dashboard.component';
import { AddFeatureComponent } from './Components/admin-dashboard/hotels-dashboard/features-dashboard/add-feature/add-feature.component';
import { EditFeatureComponent } from './Components/admin-dashboard/hotels-dashboard/features-dashboard/edit-feature/edit-feature.component';
import { AddPhotoComponent } from './Components/admin-dashboard/hotels-dashboard/photos-dashboard/add-photo/add-photo.component';
import { EditPhotoComponent } from './Components/admin-dashboard/hotels-dashboard/photos-dashboard/edit-photo/edit-photo.component';
import { AddCountryComponent } from './Components/admin-dashboard/country-dashboard/add-country/add-country.component';
import { EditCountryComponent } from './Components/admin-dashboard/country-dashboard/edit-country/edit-country.component';
import { RoomtypesDashboardComponent } from './Components/admin-dashboard/roomtypes-dashboard/roomtypes-dashboard.component';
import { EditRoomTypeComponent } from './Components/admin-dashboard/roomtypes-dashboard/edit-room-type/edit-room-type.component';
import { AddRoomTypeComponent } from './Components/admin-dashboard/roomtypes-dashboard/add-room-type/add-room-type.component';

export const routes: Routes = [
    { path: '', component: HotelBookingComponent }, 
    { path: 'login', component: LoginComponent },
    {
        path: 'dashboard',
        component: DashboardLayoutComponent,
        children: [
            { path: '', component: AdminsDashboardComponent },
            { path: 'adminsDashboard', component: AdminsDashboardComponent },
            { path: 'hotelsDashboard', component: HotelsDashboardComponent },
            { path: 'addHotel', component: AddHotelComponent },
            { path: 'editHotel/:Id', component: EditHotelComponent },
            { path: 'detailsHotel/:Id', component: DetailsHotelComponent },
            { path: 'countriesDashboard', component: CountryDashboardComponent },
            { path: 'addCountry', component: AddCountryComponent },
            { path: 'editCountry/:Id', component: EditCountryComponent },
            { path: 'roomsDashboard/:Id', component: RoomsDashboardComponent },
            { path: 'addRoom/:hotelId', component: AddRoomComponent },
            { path: 'editRoom/:Id', component: EditRoomComponent },
            { path: 'featuresDashboard/:Id', component: FeaturesDashboardComponent },
            { path: 'addFeature/:hotelId', component: AddFeatureComponent },
            { path: 'editFeature/:hotelId', component: EditFeatureComponent },
            { path: 'photosDashboard/:Id', component: PhotosDashboardComponent },
            { path: 'addPhoto/:hotelId', component: AddPhotoComponent },
            { path: 'editPhoto/:hotelId', component: EditPhotoComponent },
            { path: 'roomTypesDashboard', component: RoomtypesDashboardComponent },
            { path: 'addRoomType', component: AddRoomTypeComponent },
            { path: 'editRoomType/:Id', component: EditRoomTypeComponent },
            { path: 'featuresDashboard', component: FeaturesDashboardComponent },

        ]
    },
    { path: '**', component: PageNotFoundComponent },

];
