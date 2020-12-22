interface CalculatorPromise {
  totalWater: number,
  formatedCups: number,
  percentage: number
}

export default async function Calculator(
    cupSize: number,
    currentWaterRate: number,
    TotalWaterRate: number,
    ): Promise<CalculatorPromise> {
      const totalWater = currentWaterRate - cupSize;

      const totalCupsRemain = totalWater / 250;
      const roundedCups = Math.round(totalCupsRemain);

      const formatedCups = roundedCups <= 0 ? 0 : roundedCups;

      const percentageRate = (totalWater * 100) / TotalWaterRate;

      const percentage = 100 - Math.round(percentageRate);

      return {totalWater, formatedCups, percentage};
};
