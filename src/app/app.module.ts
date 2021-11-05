import { environment } from '../environments/environment'

// Modules
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'

// Services
import { ServiceWorkerModule } from '@angular/service-worker'

// Components
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component'
import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'
import { HeroesComponent } from './components/heroes/heroes.component'

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomeComponent,
		AboutComponent,
		HeroesComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ServiceWorkerModule.register(
			'ngsw-worker.js',
			{
				enabled: environment.production,
				registrationStrategy:
					'registerWhenStable:30000',
			}
		),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
