import Calculator from "./CalculatorFunction";

  export default {
    async WaterCalculator(weight: string) {

    const convertedWeight = Number(weight)

    const totalOfWaterPerDay = 35 * convertedWeight;

    const Cups = totalOfWaterPerDay / 250;

    const totalOfCups = Math.round(Cups)

    return {convertedWeight, totalOfWaterPerDay, totalOfCups}
  },

  async WaterProgressCalculator(cup: string, waterRate: number, waterPerDay: number) {
    let cupSize = 0;

    switch (cup) {
      case '1/2 COPO': cupSize = 125
        break

      case '1 COPO': cupSize = 250
        break

      case '1.5 COPO': cupSize = 375
        break

    default:
      break;
  }

    const {formatedCups, percentage, totalWater} = await Calculator(
      cupSize,
      waterRate,
      waterPerDay,
     )


    return {totalWater, formatedCups, percentage};
  },
}
