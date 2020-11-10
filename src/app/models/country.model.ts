export class Country {
    name: string;
    slug: string;
    confirmed: number;
    deaths: number;
    active: number;

    constructor(country: string, slug: string, confirmed?: number, deaths?: number, active?: number) {
        this.name = country;
        this.slug = slug;
        this.confirmed = confirmed;
        this.deaths = deaths;
        this.active = active;
    }
}