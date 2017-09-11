import { useStrict } from 'mobx';
import App from './App.html';

useStrict(true);

window.app = new App({
	target: document.body
});