import { observable, extendObservable, computed } from 'mobx';

const store = observable({
 currentTime: 0
});

extendObservable(store, {
  time: computed(function () {
    return store.currentTime * 4;
  })
});

window.store = store;

export default store;
