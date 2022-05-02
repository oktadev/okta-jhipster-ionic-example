import { EntityComponentsPage, EntityDetailPage, EntityUpdatePage } from '../../entity.po';

export class TagComponentsPage extends EntityComponentsPage {
  pageSelector = 'page-tag';
}

export class TagUpdatePage extends EntityUpdatePage {
  pageSelector = 'page-tag-update';

  setNameInput(name: string) {
    this.setInputValue('name', name);
  }
}

export class TagDetailPage extends EntityDetailPage {
  pageSelector = 'page-tag-detail';

  getNameContent() {
    return cy.get('#name-content');
  }
}
