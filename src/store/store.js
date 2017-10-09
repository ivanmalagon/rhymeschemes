import { observable, extendObservable, computed } from 'mobx';

const store = observable({
  time: 0,
  progress: 0,
  initialKick: 6.159,
  tempo: 95,
  bars: [
    '¿[Es]1[ta]2[mos]3? *3 [dos mol]4[es]1 *5 [os mo]4[les]1*7[ta]2[mos]3',
    'mi [banda]5 [es]1 *3 [la mas]5 *5 [ancha]5, ¿co[nec]1*7[ta]2[mos?]3',
    '*3[am]2[bos]3 *5 [jam]2[bos]3 [demos]4*7[tra]2[mos]3',
    '[en]1[tra]2[mos]3 [en]1 *3 [tra]2[mos]3 [compli]6*5caos y [os pi]6*7[ca]2[mos]3',
    '[compi]6, *3 [compi]6[ta]2[mos]3 *5 [por fin]6*6, lo *7[compli]6[ca]2[mos]3',
    '[por ti]6*2, nos *3impli[ca]2[mos]3 *5 en el [ba]2[rro]3 *7 [ma]2[rrón.]3',
    '[Compi,]6, *3 [compi]6[la]2[mos]3 *5 [emepetres]7 *7 [que te pres]7',
    '[ta]2[mos]3*2 y *3sientes *5[estrés]7*6 di*7[ga]2[mos]3, [no?]6',
    '[Si]6[ga]2[mos!]3 *3 [Va]2[mos]3 [a]2 [mos]3*5[tra]2[ros]3 [a]2 [dos]3 *7 [a]2[mos]3',
    '[a]2[dos]3[a]2[dos]3 [a]2 [dos]3 *3 [micros]8*4 con *5[litros]8*6 de *7[tra]2[go]3',
    'con [kilos]8*2 de *3gu[a]2[no]3*4 af*5[ga]2[no]3, [va]2[mos]3*6 al *7[gra]2[no]3',
    'ya me subesti*3[ma]2[ron]3*4 si de *5[ma]2[lo]3*6 me ta*7[cha]2[ron]3',
    'Putos [A]2[mos!]3 *3 so[na]2[mos]3 *5 igual que [pe]9*7[sa]2[mos]3',
    'Kilo[gra]2[mos!]3 *3 [pen]9[sa]2[mos]3 *5 igual que so*7[ña]2[mos]3. Soy',
    'X[tra]2[gos]3 [os]1 *3 [ha]2[go]3*4 el *5[a]2[mor]3, [or]1*7[gas]2[mo]3,',
    '[os]1 [ga]2[no]3*2 con *3[ór]1[da]2[gos]3*4 sobre *5[ór]1[ga]2[nos]3 *8 [Ha]2[mmond!]3'
  ]
});

extendObservable(store, {
  position: computed(function () {
    var barDuration = (60 / store.tempo) * 4;
    var toTempo = ((store.time - store.initialKick) / barDuration) + 1;
    var tick = Math.floor((toTempo % 1) * 8) + 1;
    if (store.time < store.initialKick) {
      toTempo = 0;
      tick = 0;
    }
    console.log(store.time, ' > ', Math.floor(toTempo), ' > ', tick);
    return {
      bar: Math.floor(toTempo),
      tick: tick
    };
  })
});

window.store = store;

export default store;
