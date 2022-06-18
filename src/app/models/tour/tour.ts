export class Tour {
    public Description: string;
    public Duration: number;
    public ID: number;
    public Image: string;
    public IsFavorite: boolean;
    public MaxPersons: number;
    public PriceF: number;
    public PriceG: number;
    public Region: string;
    public StartingPoint: Point;
    public Title: string;
    public Tourtype: string;
}

export class Point {
    public Lat: string;
    public Lng: string;
    public Location: string;
}