import { createEffect, delay } from 'redux-cofx';

function* onBootup() {
  yield delay(100);
  console.log('BOOTUP!');
}

const effects = {
  bootup: () => createEffect(onBootup),
};

export { effects };
