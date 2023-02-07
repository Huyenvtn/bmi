import express from 'express';
import calculateBmi from './bmiCalculator';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  if(isNaN(Number(req.query.weight)) || isNaN(Number(req.query.height))){
    res.send({
      error: "malformatted parameters"
    });
  } else {
    const obj = {
      weight: req.query.weight,
      height: req.query.height,
      bmi: calculateBmi(Number(req.query.height), Number(req.query.weight))
    };
    res.send(obj);
  }
});

const PORT = 3003;

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
});