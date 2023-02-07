interface ExerciseArg {
  hours: Array<number>,
  target: number
}

const checkArguments = (args: Array<string>): ExerciseArg => {
  if (args.length < 4) throw new Error('Not enough arguments');
  let arr = args.slice(2); 
  for (let i=0; i<arr.length; i++) {
    if(isNaN(Number(arr[i]))){
      throw new Error('Provided values were not numbers!')
    }
  }
  const arrOfNum = arr.map(str => {
    return Number(str);
  });
  return {
    hours: arrOfNum.slice(1),
    target: arrOfNum[0]
  }
}
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
try {
  const { hours, target } = checkArguments(process.argv)
  const rs = calculateExercises(hours, target)
  console.log(rs)
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.'
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage)
}
// const time = [3, 0, 2, 4.5, 0, 3, 1];
// calculateExercises(time, 1)