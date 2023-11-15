export interface PokemonListAPIResponse {
    results: PokemonListItem[];
}

export interface PokemonImageAPIResponse {
    sprites: {
        front_default: string;
    }
};

export interface PokemonListItem {
    name: string;
    url: string;
};

export interface PokemonData {
    base_happiness: number;
    capture_rate: number;
    id: number;
    name: string;
    hatch_counter: number;
    flavor_text_entries: FlavourTextEntries[];
};

export interface FlavourTextEntries {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: {
        name: string;
        url: string;
    };
};

export type RouteParams = {
    id: string;
  };