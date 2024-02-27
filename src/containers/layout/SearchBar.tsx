import Form from '@components/Form';
import InputForm from '@components/InputForm';
import { CardPreview } from '@models/Card';
import { PrimitiveTypes } from '@utils/PrimitiveTypes';
import { api } from '@utils/api';
import { debounce } from '@utils/debounce';
import React, {
  ChangeEvent,
  Dispatch, ReactElement, SetStateAction,
} from 'react';

interface SearchBarProps {
  setResult : Dispatch<SetStateAction<CardPreview[] | undefined>>
}

export default function SearchBar({ setResult } : SearchBarProps): ReactElement {
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
    api.get(`/card/search?${query}`).then((response) => setResult(response.data));
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
      <InputForm name="name" type="text" placeholder="Search card name..." onChange={onChange} />
    </Form>
  );
}
