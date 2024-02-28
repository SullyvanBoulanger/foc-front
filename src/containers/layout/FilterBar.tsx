import Label from '@nectron/Label';
import { api } from '@utils/api';
import React, {
  ReactElement, useEffect, useRef, useState,
} from 'react';
import { Filters } from '@models/Filters';
import { useForm } from '@utils/UseForm';
import { PrimitiveTypes } from '@utils/PrimitiveTypes';
import Input from '@nectron/Input';
import InputStatForm from './InputStatForm';
import SelectFilter from './SelectFilter';

interface FilterBarProps {
  isFilterVisible : boolean;
  onSearch : (data: Record<string, PrimitiveTypes>) => void;
}

export function useFirstRender() {
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, []);

  return firstRender.current;
}

export default function FilterBar({
  isFilterVisible,
  onSearch,
}: FilterBarProps): ReactElement {
  const [filters, setFilters] = useState<Filters>();
  const { formState, setFormState } = useForm();
  const firstRender = useFirstRender();

  const setUserCollection = (event: React.MouseEvent<HTMLInputElement>) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    const result = isChecked ? 'user' : '';
    setFormState({ ...formState, collection: result });
  };

  useEffect(() => {
    api.get('/card/filters').then((response) => setFilters(response.data));
  }, []);

  useEffect(() => {
    if (firstRender) return;

    onSearch(formState);
  }, [formState]);

  return (
    <div hidden={!isFilterVisible} className="absolute flex flex-wrap justify-center items-center mt-10 w-1/2 border-grey bg-silver border-4 p-2 rounded mx-auto left-1/2 transform -translate-x-1/2 gap-2">
      <Label>
        User Collection
        <Input name="collection" id="collection" type="checkbox" onClick={setUserCollection} />
      </Label>
      <Label>
        Atk
        <InputStatForm name="atk" placeholder="Atk..." />
      </Label>
      <Label>
        Def
        <InputStatForm name="def" placeholder="Def..." />
      </Label>
      <SelectFilter label="Type(s)" name="types" options={filters?.types.map((type) => type.name)} />
      <SelectFilter label="Attribute(s)" name="attributes" options={filters?.attributes.map((attribute) => attribute.name)} />
      <SelectFilter label="Race/Trait(s)" name="raceTraits" options={filters?.raceTraits.map((raceTrait) => raceTrait.name)} />
      <SelectFilter label="Set(s)" name="sets" options={filters?.sets.map((set) => set.abbreviation)} />
      <SelectFilter label="Rarity(ies)" name="rarities" options={filters?.rarities.map((rarity) => rarity.code)} />
    </div>
  );
}
