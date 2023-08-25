import Image from 'next/image'
import { useRouter } from 'next/router'
import crypto from 'crypto';
import Time from './components/Time';
import { getCurrentDate, getPreviousDate, calculatePercentageChange } from '../helpers/helpers';

// Adding interfaces for the data we'll be fetching
interface FitbitWeightEntry {
  dateTime: string;
  value: number;
}

interface FitbitWeightResponse {
  'body-weight': FitbitWeightEntry[];
}  

interface OuraRingSleepData {
  data: Array<{
    score: number;
    // Add other fields as necessary
  }>;
}

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Time />
    </div>
  )
}
