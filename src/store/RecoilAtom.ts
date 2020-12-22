import {atom} from 'recoil';

export const userHealthly = atom({
  key: 'userHealthly',
  default:
    {
      weight: 0,
      waterPerDay: 0,
      cupsAvarage: 0,
    }
  ,
})

export const userProgress = atom({
  key: 'userProgress',
  default:
    {
      percentage: 0,
      waterRemain: 0,
      cupsMissing: 0,
      LastWeekCompair: 0,
    }
  ,
})

interface ConcludeGoalProps {
  dayStreak: Array<number>,
  completedDay: boolean,
}

export const concludeGoal = atom<ConcludeGoalProps>({
  key: 'concludeGoal',
  default:
    {
      dayStreak: [],
      completedDay: false,
    }
  ,
})
