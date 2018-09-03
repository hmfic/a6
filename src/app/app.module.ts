import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCheckboxModule } from '@angular/material/checkbox';
import {  MatButtonModule, MatCardModule, MatSidenavModule, MatCheckboxModule, MatToolbarModule, MatListModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { MenubarComponent } from './menubar/menubar.component';
import { MysettingsmodalComponent } from './mysettingsmodal/mysettingsmodal.component';
//import { CourseDialogComponent } from './course-dialog/course-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    MenubarComponent,
    MysettingsmodalComponent,
    //CourseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ MysettingsmodalComponent ]
})
export class AppModule { }
