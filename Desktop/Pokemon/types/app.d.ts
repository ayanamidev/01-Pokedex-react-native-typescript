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
    height:number;
    id:number;
    name:string;
    sprites:{
        other:{
            "official-artwork":{
                front_default:string;
            };
        };
    };
    types:PokemonType[];
    weight: number;


}