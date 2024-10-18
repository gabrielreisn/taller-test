'use client';

import { useMemo, useState } from 'react';
import { Transaction } from './page';

type Props = {
  data: Transaction[];
};

export function Display({ data }: Props) {
  const [startDate,setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const currencyFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  const dateFormatter = new Intl.DateTimeFormat('en-US')

  const filteredData = data.filter(data => {
    
    return data.date.getTime() > startDate.getTime() && data.date.getTime() < endDate.getTime()
  
  })
  

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <label>Enter a date before 1989-10-30:</label>
      <pre>{startDate.getTime()}</pre>
      <input type="date" name="myDate" value={startDate.getTime()} onChange={e => setStartDate(new Date(e.target.value))}/>

      <label>Enter a date after 2001-01-01:</label>
      <input type="date" name="myDate" value={endDate.getTime()} onChange={e => setEndDate(new Date(e.target.value))}/>
      <ul className="flex flex-col">
        {filteredData.map((transaction) => {
          return (
            <li key={transaction.id} className="flex gap-4">
              <span>{transaction.id}</span>
              <span>{currencyFormatter.format(transaction.amount)}</span>
              <span>{transaction.description}</span>
              <span>{dateFormatter.format(transaction.date)}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
