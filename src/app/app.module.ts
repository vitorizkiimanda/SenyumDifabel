import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Camera } from '@ionic-native/camera';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MessagingPage } from '../pages/messaging/messaging';
import { JobsPage } from '../pages/jobs/jobs';
import { LoginPage } from '../pages/login/login';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { NotificationPage } from '../pages/notification/notification';
import { PostPage } from '../pages/post/post';
import { Autosize } from '../directives/autosize/autosize';
import { MessagePersonalPage } from '../pages/message-personal/message-personal';
import { MessageGroupPage } from '../pages/message-group/message-group';
import { CreateGroupPage } from '../pages/create-group/create-group';
import { JobDetailPage } from '../pages/job-detail/job-detail';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { SettingPage } from '../pages/setting/setting';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { JobApplyPage } from '../pages/job-apply/job-apply';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../providers/data';
import { HttpModule } from '@angular/http';
import { InterviewPage } from '../pages/interview/interview';
import { InterviewVideoPage } from '../pages/interview-video/interview-video';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { ProfileOtherPage } from '../pages/profile-other/profile-other';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MessagingPage,
    JobsPage,
    JobApplyPage,
    LoginPage,
    OnboardingPage,
    ProfilePage,
    RegisterPage,
    NotificationPage,
    PostPage,
    ContactPage,
    MessagePersonalPage,
    MessageGroupPage,
    CreateGroupPage,
    JobDetailPage,
    ProfileEditPage,
    ProfileOtherPage,
    SettingPage,
    LoginPage,
    RegisterPage,
    InterviewPage,
    InterviewVideoPage,
    TabsPage,
    
    Autosize
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MessagingPage,
    JobsPage,
    JobApplyPage,
    LoginPage,
    OnboardingPage,
    ProfilePage,
    RegisterPage,
    NotificationPage,
    PostPage,
    ContactPage,
    MessagePersonalPage,
    MessageGroupPage,
    CreateGroupPage,
    JobDetailPage,
    ProfileEditPage,
    ProfileOtherPage,
    SettingPage,
    LoginPage,
    RegisterPage,
    InterviewPage,
    InterviewVideoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ScreenOrientation,
    YoutubeVideoPlayer,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
