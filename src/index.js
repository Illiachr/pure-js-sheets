import Sheets from '@/components/Sheets/Sheets';
import Header from '@/components/Header/Header';
import Toolbar from '@/components/Toolbar/Toolbar';
import Formula from '@/components/Formula/Formula';
import Table from '@/components/Table/Table';
import './scss/style.scss';

const sheets = new Sheets('#app', {
  components: [Header, Toolbar, Formula, Table]
});

sheets.render();
