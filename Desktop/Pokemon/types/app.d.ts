export type Pokemon={
    name:string;
    url:string;
}
type PokemonType={
    slot:number;
    type:{
        name:string;
        url:string;
    };
}

export type PokemonDetails={
    cries:{
        latest: string;
    };
    heigh:number;
    id:number;
    name:string;
    sprites:{
        other:{
            "official-artwork":{
                front_default:string;
            };
        };
    };
    typer:PokemonType[];
    weight: number;


}