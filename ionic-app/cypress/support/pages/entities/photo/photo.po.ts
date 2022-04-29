import { EntityComponentsPage, EntityDetailPage, EntityUpdatePage } from '../../entity.po';

export class PhotoComponentsPage extends EntityComponentsPage {
  pageSelector = 'page-photo';
}

export class PhotoUpdatePage extends EntityUpdatePage {
  pageSelector = 'page-photo-update';

  setTitleInput(title: string) {
    this.setInputValue('title', title);
  }

  setDescriptionInput(description: string) {
    this.setTextAreaContent('description', description);
  }

  setImageInput(image: string) {
    this.setBlob('image', image);
  }

  setHeightInput(height: string) {
    this.setInputValue('height', height);
  }

  setWidthInput(width: string) {
    this.setInputValue('width', width);
  }

  setTakenInput(taken: string) {
    this.setDateTime('taken', taken);
  }

  setUploadedInput(uploaded: string) {
    this.setDateTime('uploaded', uploaded);
  }
}

export class PhotoDetailPage extends EntityDetailPage {
  pageSelector = 'page-photo-detail';

  getTitleContent() {
    return cy.get('#title-content');
  }

  getDescriptionContent() {
    return cy.get('#description-content');
  }

  getImageContent() {
    return cy.get('#image-content');
  }

  getHeightContent() {
    return cy.get('#height-content');
  }

  getWidthContent() {
    return cy.get('#width-content');
  }

  getTakenContent() {
    return cy.get('#taken-content');
  }

  getUploadedContent() {
    return cy.get('#uploaded-content');
  }
}
