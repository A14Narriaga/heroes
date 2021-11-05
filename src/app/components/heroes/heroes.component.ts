import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

// Services
import {
	HeroesService,
	Hero,
} from '../../services/heroes/heroes.service'

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.sass'],
})
export class HeroesComponent implements OnInit {
	heroes: Hero[]
	constructor(
		private heroesService: HeroesService,
		private router: Router
	) {
		this.heroes = []
	}

	ngOnInit(): void {
		this.heroes = this.heroesService.getHeroes()
	}

	showHero = (index: number) => {
		this.router.navigate(['/hero', index])
	}
}
