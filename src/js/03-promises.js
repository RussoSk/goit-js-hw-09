const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const delayInput = document.querySelector('input[name="delay"]');
  const stepInput = document.querySelector('input[name="step"]');
  const amountInput = document.querySelector('input[name="amount"]');

  const delay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  if (isNaN(delay) || isNaN(step) || isNaN(amount)) {
    alert('Please enter valid interval "numbers"');
    return;
  }

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const currentDelay = delay + i * step;
    createPromise(position, currentDelay)
      .then(() => {
        console.log(`Promise ${position} resolved after ${currentDelay}ms`);
      })
      .catch(() => {
        console.log(`Promise ${position} rejected after ${currentDelay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        resolve({ position, delay });
      } else {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
