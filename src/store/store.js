import { observable, extendObservable, computed } from 'mobx';

const store = observable({
  time: 0,
  progress: 0,
  tempo: 85,
  bars: [
    'Hey pijo de que vas',
    'tanto mirarme te voy machacar',
    'de que me miras de arriba a abajo',
    'te voy dar en la cara un cadenazo.'
  ]
});

extendObservable(store, {
  position: computed(function () {
    var barDuration = (60 / store.tempo) * 4;
    var toTempo = (store.time / barDuration) + 1;
    var tick = Math.floor((toTempo % 1) * 8) + 1;
    return {
      bar: Math.floor(toTempo),
      tick: tick
    };
  })
});

window.store = store;

export default store;
