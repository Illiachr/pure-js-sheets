import Sheets from '@/components/sheets/sheets';
import Header from '@/components/header/Header';
import Toolbar from '@/components/toolbar/Toolbar';
import Formula from '@/components/formula/Formula';
import Table from '@/components/table/Table';
import './scss/style.scss';

const sheets = new Sheets('#app', {
  components: [Header, Toolbar, Formula, Table]
});

sheets.render();
