import React from 'react';
import HomeLists, { IClickableItem } from './HomeLists';

export default class CurriculumLists extends HomeLists {
  protected name(): string {
    return 'Australian Curriculum';
  };

  protected get items(): IClickableItem[] {
    return [
      { title: 'Kindergarten', action: this.clickItem.bind(this) },
      { title: 'Grade 1', action: this.clickItem.bind(this) },
      { title: 'Grade 2', action: this.clickItem.bind(this) },
      { title: 'Grade 3', action: this.clickItem.bind(this) },
      { title: 'Grade 4', action: this.clickItem.bind(this) },
      { title: 'Grade 5', action: this.clickItem.bind(this) },
      { title: 'Grade 6', action: this.clickItem.bind(this) }
    ];
  }

  protected clickItem(): void {
    console.log('clicked');
  }
}