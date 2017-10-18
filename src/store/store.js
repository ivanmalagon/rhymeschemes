import { observable, extendObservable, computed } from 'mobx';

const store = observable({
  time: 0,
  progress: 0,
  initialKick: 6.159,
  tempo: 93,
  bars: [
    '¿[Es]1[ta]2[mos]3? [dos mol]4[es]1 [os mo]4[les]1[ta]2[mos]3',
    'mi [banda]5 [es]1 [la mas]5 [ancha]5, ¿co[nec]1[ta]2[mos?]3',
    '`[am]2[bos]3 [jam]2[bos]3 [demos]4[tra]2[mos]3',
    '[en]1[tra]2[mos]3 [en]1 [tra]2[mos]3 [compli]6caos y [os pi]6[ca]2[mos]3',
    '[compi]6, [compi]6[ta]2[mos]3 [por fin]6, lo [compli]6[ca]2[mos]3',
    '[por ti]6, nos impli[ca]2[mos]3 en el [ba]2[rro]3 [ma]2[rrón.]3',
    '[Compi,]6, [compi]6[la]2[mos]3 [emepetres]7 [que te pres]7',
    '[ta]2[mos]3 y sientes [estrés]7 di[ga]2[mos]3, [no?]6',
    '[Si]6[ga]2[mos!]3 [Va]2[mos]3 [a]2 [mos]3[tra]2[ros]3 [a]2 [dos]3 [a]2[mos]3',
    '[a]2[dos]3[a]2[dos]3 [a]2 [dos]3 [micros]8 con [litros]8 de [tra]2[go]3',
    'con [kilos]8 de gu[a]2[no]3 af[ga]2[no]3, [va]2[mos]3 al [gra]2[no]3',
    'ya me subesti[ma]2[ron]3 si de [ma]2[lo]3 me ta[cha]2[ron]3',
    'Putos [A]2[mos!]3 so[na]2[mos]3 igual que [pe]9[sa]2[mos]3',
    'Kilo[gra]2[mos!]3 [pen]9[sa]2[mos]3 igual que so[ña]2[mos]3. Soy',
    'X[tra]2[gos]3 [os]1 [ha]2[go]3 el [a]2[mor]3, [or]1[gas]2[mo]3,',
    '[os]1 [ga]2[no]3 con [ór]1[da]2[gos]3 sobre [ór]1[ga]2[nos]3 [Ha]2[mmond!]3'
  ]
});

extendObservable(store, {
  position: computed(function () {
    var barDuration = (60 / store.tempo) * 4;
    var toTempo = ((store.time - store.initialKick) / barDuration) + 1;
    var tick = Math.floor((toTempo % 1) * 4) + 1;
    if (store.time < store.initialKick) {
      toTempo = 0;
      tick = 0;
    }
    return {
      bar: Math.floor(toTempo),
      tick: tick
    };
  })
});

window.store = store;

export default store;
