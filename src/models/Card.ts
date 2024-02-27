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

interface Type {
  id: number;
  name: string;
}

interface Set {
  id: number;
  name: string;
  abbreviation: string;
}

interface Rarity {
  id: number;
  code: string;
}

interface Attribute {
  id: number;
  name: string;
}

interface RaceTrait {
  id: number;
  name: string;
}
