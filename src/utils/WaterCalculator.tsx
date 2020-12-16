  export default {
    async WaterCalculator(weight: string) {

    const convertedWeight = Number(weight)

    const totalOfWaterPerDay = 35 * convertedWeight;

    const totalOfCups = totalOfWaterPerDay / 250;

    return {convertedWeight, totalOfWaterPerDay, totalOfCups}
  },
}
