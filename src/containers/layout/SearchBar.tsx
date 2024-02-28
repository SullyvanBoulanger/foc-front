import Form from '@components/Form';
import InputForm from '@components/InputForm';
import { TCardPreview } from '@models/Card';
import Button from '@nectron/Button';
import { PrimitiveTypes } from '@utils/PrimitiveTypes';
import { api } from '@utils/api';
import { debounce } from '@utils/debounce';
import React, {
  ChangeEvent,
  Dispatch, ReactElement, SetStateAction, useState,
} from 'react';
import FilterBar from './FilterBar';

interface SearchBarProps {
  setResult : Dispatch<SetStateAction<TCardPreview[] | undefined>>
}

export default function SearchBar({ setResult } : SearchBarProps): ReactElement {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

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
        <FilterBar debounceSubmit={onSubmit} isFilterVisible={isFilterVisible} />
      </div>
    </Form>
  );
}
