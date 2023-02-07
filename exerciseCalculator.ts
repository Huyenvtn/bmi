const calculateExercises = (hours: Array<number>, target: number) => {
  const hoursTrain = hours.filter(hour => hour > 0);
  let totalHours = 0;
  for (let i = 0; i < hoursTrain.length; i ++) {
    totalHours += hoursTrain[i];
  }
  const average = hours.length > 0 ? totalHours/hours.length : 0;
  return {
    periodLength: hours.length,
    trainingDays: hoursTrain.length,
    success: average >= target ? true : false,
    rating:  average >= target ? 3 : 2,
    ratingDescription: average >= target ? 'very good' : 'not too bad but could be better',
    target: target,
    average: hours.length > 0 ? totalHours/hours.length : 0
  }
}
const time = [3, 0, 2, 4.5, 0, 3, 1];
console.log(calculateExercises(time, 1))