import React, { ChangeEvent, ReactElement, useState } from 'react';
import Button from '@nectron/Button';
import Input from '@nectron/Input';
import { api } from '@utils/api';
import CardDetail from './CardDetail';

interface QuantityProps {
  defaultQuantity: number | undefined,
  cardId: number
}

export default function Quantity({ defaultQuantity, cardId }: QuantityProps): ReactElement {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [field, setField] = useState<number>(1);
  const [lock, setLock] = useState<boolean>(false);

  const handlePressed = (url: string) => {
    if (!field) return;
    setLock(true);
    api.put(url, {
      cardId,
      numberToApply: field,
    }).then((response) => setQuantity(response.data))
      .finally(() => setLock(false));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: currentValue } = event.target;
    if (Number.isInteger(+currentValue)) {
      setField(Number.parseInt(currentValue, 10));
    }
  };

  return (
    <div>
      <CardDetail label="Quantity" desc={quantity} />
      <div className="flex flex-wrap mt-1 ">
        <Button className="mr-2 text-xl" onClick={() => handlePressed('/card/remove_to_collection')} disabled={lock}>
          -
        </Button>
        <Input type="number" onChange={handleChange} defaultValue={1} style={{ width: '100px' }} />
        <Button className="ml-2 text-xl" onClick={() => handlePressed('/card/add_to_collection')} disabled={lock}>
          +
        </Button>
      </div>
    </div>
  );
}
