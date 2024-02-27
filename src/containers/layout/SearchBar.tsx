import Form from '@components/Form';
import InputForm from '@components/InputForm';
import SelectForm from '@components/SelectForm';
import { TCardPreview } from '@models/Card';
import { Filters } from '@models/Filters';
import Button from '@nectron/Button';
import Label from '@nectron/Label';
import { PrimitiveTypes } from '@utils/PrimitiveTypes';
import { api } from '@utils/api';
import { debounce } from '@utils/debounce';
import React, {
  ChangeEvent,
  Dispatch, ReactElement, SetStateAction, useEffect, useState,
} from 'react';
import InputStatForm from './InputStatForm';

interface SearchBarProps {
  setResult : Dispatch<SetStateAction<TCardPreview[] | undefined>>
}

export default function SearchBar({ setResult } : SearchBarProps): ReactElement {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState<Filters>();

  const constructQuery = (data: Record<string, PrimitiveTypes>): string => {
    let query = '';

    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        query = query === ''
          ? `${query + key}=${value}`
          : `${query}&${key}=${value}`;
      }
    });

    return query;
  };

  const debounceSearchFilterCall = debounce((query: string) => {
    api.get(`/card/search?${query}`).then((response) => setResult(response.data)).catch();
  }, 400);

  const onSubmit = ((data: Record<string, PrimitiveTypes>) => {
    const query = constructQuery(data);

    debounceSearchFilterCall(query);
  });

  const debounceSearchNameCall = debounce((currentValue: string) => {
    api.get(`/card/search?name=${currentValue}`).then((response) => setResult(response.data));
  }, 400);

  const onChange = ((event: ChangeEvent<HTMLInputElement>) => {
    const { value: currentValue } = event.target;
    if (currentValue.length < 3) return;
    debounceSearchNameCall(currentValue);
  });

  useEffect(() => {
    api.get('/card/filters').then((response) => setFilters(response.data));
  }, []);

  return (
    <Form handleSubmit={onSubmit}>
      <div className="flex gap-1">
        <InputForm name="name" type="text" placeholder="Search card name..." onChange={onChange} />
        <Button
          className="p-0"
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setIsFilterVisible(!isFilterVisible);
          }}
        >
          <svg className="h-6 w-6 text-black-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />
            {' '}
            <line x1="4" y1="6" x2="20" y2="6" />
            {' '}
            <line x1="4" y1="12" x2="20" y2="12" />
            {' '}
            <line x1="4" y1="18" x2="16" y2="18" />
          </svg>
        </Button>
        <div hidden={!isFilterVisible} className="absolute flex flex-wrap justify-center items-center mt-10 w-1/2 border-grey bg-silver border-4 p-2 rounded mx-auto left-1/2 transform -translate-x-1/2 gap-2">
          {/* <Label>
            Collection
            <Input name="collection" id="collection" type="checkbox" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="collection"> User </label>
          </Label> */}
          <Label>
            Atk
            <InputStatForm name="atk" placeholder="Atk..." />
          </Label>
          <Label>
            Def
            <InputStatForm name="def" placeholder="Def..." />
          </Label>
          <Label>
            Type(s)
            <SelectForm multiple name="types" options={filters?.types.map((type) => type.name) || []} />
          </Label>
          <Label>
            Attribute(s)
            <SelectForm multiple name="attributes" options={filters?.attributes.map((attribute) => attribute.name) || []} />
          </Label>
          <Label>
            Race/Trait(s)
            <SelectForm multiple name="raceTraits" options={filters?.raceTraits.map((raceTrait) => raceTrait.name) || []} />
          </Label>
          <Label>
            Set(s)
            <SelectForm multiple name="sets" options={filters?.sets.map((set) => set.abbreviation) || []} />
          </Label>
          <Label>
            Rarity(ies)
            <SelectForm multiple name="rarities" options={filters?.rarities.map((rarity) => rarity.code) || []} />
          </Label>
        </div>
      </div>
    </Form>
  );
}
