import { EntityComponentsPage, EntityDetailPage, EntityUpdatePage } from '../../entity.po';

export class AlbumComponentsPage extends EntityComponentsPage {
  pageSelector = 'page-album';
}

export class AlbumUpdatePage extends EntityUpdatePage {
  pageSelector = 'page-album-update';

  setTitleInput(title: string) {
    this.setInputValue('title', title);
  }

  setDescriptionInput(description: string) {
    this.setTextAreaContent('description', description);
  }

  setCreatedInput(created: string) {
    this.setDateTime('created', created);
  }
}

export class AlbumDetailPage extends EntityDetailPage {
  pageSelector = 'page-album-detail';

  getTitleContent() {
    return cy.get('#title-content');
  }

  getDescriptionContent() {
    return cy.get('#description-content');
  }

  getCreatedContent() {
    return cy.get('#created-content');
  }
}
