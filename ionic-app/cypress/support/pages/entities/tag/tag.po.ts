import { EntityComponentsPage, EntityDetailPage, EntityUpdatePage } from '../../entity.po';

export class TagComponentsPage extends EntityComponentsPage {
  pageSeletor = 'page-tag';
}

export class TagUpdatePage extends EntityUpdatePage {
  pageSeletor = 'page-tag-update';

  setNameInput(name: string) {
    this.setInputValue('name', name);
  }
}

export class TagDetailPage extends EntityDetailPage {
  pageSeletor = 'page-tag-detail';

  getNameContent() {
    return cy.get('#name-content');
  }
}
