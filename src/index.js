import Sheets from '@/components/Sheets/Sheets';
import Header from '@/components/Header/Header';
import Toolbar from '@/components/Toolbar/Toolbar';
import Formula from '@/components/Formula/Formula';
import Table from '@/components/Table/Table';
import Store from './core/Store';
import rootReducer from '@store/rootReducer';
import './scss/style.scss';
import {storeLocal} from './core/utils';

const store = new Store(rootReducer, storeLocal('sheets-state'));

store.subscribe(state => {
  console.warn(state);
  storeLocal('sheets-state', state);
});

const sheets = new Sheets('#app', {
  components: [Header, Toolbar, Formula, Table], store
});

sheets.render();
