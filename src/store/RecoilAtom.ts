import {atom} from 'recoil';

export const userHealthly = atom({
  key: 'userHealthly',
  default:
    {
      weight: 0,
      waterPerDay: 0,
      cupsAvarage: 0,
      percentage: 0,
    }
  ,
})
