import Image from 'next/image'
import { useRouter } from 'next/router'
import crypto from 'crypto';
import Time from './components/Time';
import { getCurrentDate, getPreviousDate, calculatePercentageChange } from '../helpers/helpers';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Time />
    </div>
  )
}
