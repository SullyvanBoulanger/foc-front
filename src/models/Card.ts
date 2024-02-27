export interface Card {
  id: number;
  game_id: string;
  url_picture: string;
  name: string;
  cost: string;
  text: string;
  atk: number | undefined;
  def: number | undefined;
  flavour: string;
  type: Type;
  set: Set;
  rarity: Rarity;
  attributes: Attribute[];
  raceTraits: RaceTrait[];
}

export interface CardDetails {
  card : Card;
  quantity : number | undefined;
}

export type TCardPreview = Pick<Card, 'id' | 'url_picture'>;

export interface UserCardPreview extends TCardPreview {
  quantity: number;
}

export interface Type {
  id: number;
  name: string;
}

export interface Set {
  id: number;
  name: string;
  abbreviation: string;
}

export interface Rarity {
  id: number;
  code: string;
}

export interface Attribute {
  id: number;
  name: string;
}

export interface RaceTrait {
  id: number;
  name: string;
}
