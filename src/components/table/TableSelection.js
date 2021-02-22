export default class TableSelection {
  static className = 'selected';
  constructor() {
    this.$group = [];
    this.current = null;
  }

  select($el) {
    this.clear();
    $el.addClass(TableSelection.className);
    this.$group.push($el);
    this.current = $el;
  }

  selectGroup($group) {
    console.log($group);
    this.clear();
    this.$group = $group;
    this.$group.forEach($el => $el.addClass(TableSelection.className));
  }

  clear() {
    this.$group.forEach($el => $el.rmClass(TableSelection.className));
    this.$group = [];
  }
}
