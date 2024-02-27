import {
  Attribute, RaceTrait, Rarity, Set, Type,
} from './Card';

export interface Filters {
  types: Type[];
  attributes: Attribute[];
  raceTraits: RaceTrait[];
  sets: Set[];
  rarities: Rarity[];
}
