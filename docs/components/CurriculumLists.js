import HomeLists from "./HomeLists.js";
export default class CurriculumLists extends HomeLists {
  name() {
    return "Australian Curriculum";
  }
  get items() {
    return [
      {title: "Kindergarten", action: this.clickItem.bind(this)},
      {title: "Grade 1", action: this.clickItem.bind(this)},
      {title: "Grade 2", action: this.clickItem.bind(this)},
      {title: "Grade 3", action: this.clickItem.bind(this)},
      {title: "Grade 4", action: this.clickItem.bind(this)},
      {title: "Grade 5", action: this.clickItem.bind(this)},
      {title: "Grade 6", action: this.clickItem.bind(this)}
    ];
  }
  clickItem() {
    console.log("clicked");
  }
}
