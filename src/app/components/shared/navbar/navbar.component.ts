import {
	Component,
	OnInit,
} from '@angular/core'
import { Router } from '@angular/router'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent
	implements OnInit
{
	constructor(private router: Router) {}

	ngOnInit(): void {}

	searchHeroes = (name: string) => {
		this.router.navigate(['/heroes', name])
	}
}
