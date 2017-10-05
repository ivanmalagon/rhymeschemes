import { observable, extendObservable, computed } from 'mobx';

const store = observable({
  time: 0,
  progress: 0,
  tempo: 85,
  bars: [
    'Hey *3pijo *4de *5que *7vas',
    'tan*2to mi*3rarme *4te *5voy a *6macha*7car',
    'de que me *3miras de *5arriba a *7abajo',
    'te voy a *3dar en la *5cara un cade*7nazo.'
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
