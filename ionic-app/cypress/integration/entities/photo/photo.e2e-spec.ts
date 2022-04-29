import { userUsername, userPassword } from '../../../support/config';
import { PhotoComponentsPage, PhotoDetailPage, PhotoUpdatePage } from '../../../support/pages/entities/photo/photo.po';
import photoSample from './photo.json';

describe('Photo entity', () => {
  const COMPONENT_TITLE = 'Photos';
  const SUBCOMPONENT_TITLE = 'Photo';

  const photoPageUrl = '/tabs/entities/photo';
  const photoApiUrl = '/api/photos';

  const photoComponentsPage = new PhotoComponentsPage();
  const photoUpdatePage = new PhotoUpdatePage();
  const photoDetailPage = new PhotoDetailPage();

  let photo: any;

  beforeEach(() => {
    photo = undefined;
    cy.login(userUsername, userPassword);
  });

  describe('navigation test', () => {
    it('should load Photos page using menu and go back', () => {
      cy.visit('/tabs/home');
      // go to entity component page
      cy.get('ion-tab-button[tab="entities"]').click();
      cy.get('ion-item h2').contains(SUBCOMPONENT_TITLE).first().click();

      photoComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE).should('be.visible');
      cy.url().should('include', photoPageUrl);

      photoComponentsPage.back();
      cy.url().should('include', '/tabs/entities');
    });

    it('should load create Photo page and go back', () => {
      cy.visit(photoPageUrl);
      photoComponentsPage.clickOnCreateButton();

      photoUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);

      photoUpdatePage.back();
      cy.url().should('include', photoPageUrl);
    });
  });

  describe('navigation test with items', () => {
    beforeEach(() => {
      cy.authenticatedRequest({
        method: 'POST',
        url: photoApiUrl,
        body: photoSample,
      }).then(({ body }) => {
        photo = body;

        cy.intercept(
          {
            method: 'GET',
            url: `${photoApiUrl}+(?*|)`,
            times: 1,
          },
          {
            statusCode: 200,
            body: [photo],
          }
        ).as('entitiesRequestInternal');
      });
    });

    afterEach(() => {
      if (photo) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${photoApiUrl}/${photo.id}`,
        }).then(() => {
          photo = undefined;
        });
      }
    });

    it('should open Photo view, open Photo edit and go back', () => {
      cy.visit(photoPageUrl);
      photoComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      photoDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      if (photo.title !== undefined && photo.title !== null) {
        photoDetailPage.getTitleContent().contains(photo.title);
      }
      if (photo.height !== undefined && photo.height !== null) {
        photoDetailPage.getHeightContent().contains(photo.height);
      }
      if (photo.width !== undefined && photo.width !== null) {
        photoDetailPage.getWidthContent().contains(photo.width);
      }
      photoDetailPage.edit();

      photoUpdatePage.back();
      photoDetailPage.back();
      cy.url().should('include', photoPageUrl);
    });

    it('should open Photo view, open Photo edit and save', () => {
      cy.visit(photoPageUrl);
      photoComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      photoDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      photoDetailPage.edit();

      photoUpdatePage.save();
      cy.url().should('include', photoPageUrl);
    });

    it('should delete Photo', () => {
      cy.visit(photoPageUrl);
      photoComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      photoDetailPage.delete();
      cy.get('ion-alert button:not(.alert-button-role-cancel)').click();

      photoComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE);
      photo = undefined;
    });
  });

  describe('creation test', () => {
    beforeEach(() => {
      cy.intercept({
        method: 'POST',
        url: photoApiUrl,
        times: 1,
      }).as('entitiesPost');
    });

    afterEach(() => {
      if (photo) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${photoApiUrl}/${photo.id}`,
        }).then(() => {
          photo = undefined;
        });
      }
    });

    it('should create Photo', () => {
      cy.visit(photoPageUrl + '/new');

      photoUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);
      if (photoSample.title !== undefined && photoSample.title !== null) {
        photoUpdatePage.setTitleInput(photoSample.title);
      }
      if (photoSample.description !== undefined && photoSample.description !== null) {
        photoUpdatePage.setDescriptionInput(photoSample.description);
      }
      if (photoSample.image !== undefined && photoSample.image !== null) {
        photoUpdatePage.setImageInput(photoSample.image);
      }
      if (photoSample.height !== undefined && photoSample.height !== null) {
        photoUpdatePage.setHeightInput(photoSample.height);
      }
      if (photoSample.width !== undefined && photoSample.width !== null) {
        photoUpdatePage.setWidthInput(photoSample.width);
      }
      if (photoSample.taken !== undefined && photoSample.taken !== null) {
        photoUpdatePage.setTakenInput(photoSample.taken);
      }
      if (photoSample.uploaded !== undefined && photoSample.uploaded !== null) {
        photoUpdatePage.setUploadedInput(photoSample.uploaded);
      }
      photoUpdatePage.save();

      cy.wait('@entitiesPost').then(({ response }) => {
        const { body } = response;
        photo = body;
      });

      photoComponentsPage.getPageTitle().contains(COMPONENT_TITLE);
    });
  });
});
