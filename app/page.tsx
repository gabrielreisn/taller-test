import { Display } from "./Display";


// - Display the following information for each payment transaction: Transaction ID, Date, Description, Amount (in USD)
export type Transaction = {
  id: string;
  date: Date;
  description: string;
  amount: number
}

const MOCK_DATA: Array<Transaction> = [{
  id: '1',
  date: new Date('10-10-2020'),
  description: '1 apple',
  amount: 123
},{
  id: '2',
  date: new Date(),
  description: '2 boxes',
  amount: 456
}]

function fetchFakeData(): Promise<Transaction[]>{
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_DATA), 100);
  });
}


export default async function Home() {

  

  try{
    const data: Awaited<Array<Transaction>> = await fetchFakeData()


    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <Display data={data}/>
        
      </div>
    );
  }catch(e){
    console.error(e,'error')
    return <div>Oops something went wrong :(</div>
  }


}
