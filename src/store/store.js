import { observable } from 'mobx';

const store = observable({
 currentTime: 0
});

window.store = store;

export default store;
