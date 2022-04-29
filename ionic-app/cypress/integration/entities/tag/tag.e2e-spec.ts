import { userUsername, userPassword } from '../../../support/config';
import { TagComponentsPage, TagDetailPage, TagUpdatePage } from '../../../support/pages/entities/tag/tag.po';
import tagSample from './tag.json';

describe('Tag entity', () => {
  const COMPONENT_TITLE = 'Tags';
  const SUBCOMPONENT_TITLE = 'Tag';

  const tagPageUrl = '/tabs/entities/tag';
  const tagApiUrl = '/api/tags';

  const tagComponentsPage = new TagComponentsPage();
  const tagUpdatePage = new TagUpdatePage();
  const tagDetailPage = new TagDetailPage();

  let tag: any;

  beforeEach(() => {
    tag = undefined;
    cy.login(userUsername, userPassword);
  });

  describe('navigation test', () => {
    it('should load Tags page using menu and go back', () => {
      cy.visit('/tabs/home');
      // go to entity component page
      cy.get('ion-tab-button[tab="entities"]').click();
      cy.get('ion-item h2').contains(SUBCOMPONENT_TITLE).first().click();

      tagComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE).should('be.visible');
      cy.url().should('include', tagPageUrl);

      tagComponentsPage.back();
      cy.url().should('include', '/tabs/entities');
    });

    it('should load create Tag page and go back', () => {
      cy.visit(tagPageUrl);
      tagComponentsPage.clickOnCreateButton();

      tagUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);

      tagUpdatePage.back();
      cy.url().should('include', tagPageUrl);
    });
  });

  describe('navigation test with items', () => {
    beforeEach(() => {
      cy.authenticatedRequest({
        method: 'POST',
        url: tagApiUrl,
        body: tagSample,
      }).then(({ body }) => {
        tag = body;

        cy.intercept(
          {
            method: 'GET',
            url: `${tagApiUrl}+(?*|)`,
            times: 1,
          },
          {
            statusCode: 200,
            body: [tag],
          }
        ).as('entitiesRequestInternal');
      });
    });

    afterEach(() => {
      if (tag) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${tagApiUrl}/${tag.id}`,
        }).then(() => {
          tag = undefined;
        });
      }
    });

    it('should open Tag view, open Tag edit and go back', () => {
      cy.visit(tagPageUrl);
      tagComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      tagDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      if (tag.name !== undefined && tag.name !== null) {
        tagDetailPage.getNameContent().contains(tag.name);
      }
      tagDetailPage.edit();

      tagUpdatePage.back();
      tagDetailPage.back();
      cy.url().should('include', tagPageUrl);
    });

    it('should open Tag view, open Tag edit and save', () => {
      cy.visit(tagPageUrl);
      tagComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      tagDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      tagDetailPage.edit();

      tagUpdatePage.save();
      cy.url().should('include', tagPageUrl);
    });

    it('should delete Tag', () => {
      cy.visit(tagPageUrl);
      tagComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      tagDetailPage.delete();
      cy.get('ion-alert button:not(.alert-button-role-cancel)').click();

      tagComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE);
      tag = undefined;
    });
  });

  describe('creation test', () => {
    beforeEach(() => {
      cy.intercept({
        method: 'POST',
        url: tagApiUrl,
        times: 1,
      }).as('entitiesPost');
    });

    afterEach(() => {
      if (tag) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${tagApiUrl}/${tag.id}`,
        }).then(() => {
          tag = undefined;
        });
      }
    });

    it('should create Tag', () => {
      cy.visit(tagPageUrl + '/new');

      tagUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);
      if (tagSample.name !== undefined && tagSample.name !== null) {
        tagUpdatePage.setNameInput(tagSample.name);
      }
      tagUpdatePage.save();

      cy.wait('@entitiesPost').then(({ response }) => {
        const { body } = response;
        tag = body;
      });

      tagComponentsPage.getPageTitle().contains(COMPONENT_TITLE);
    });
  });
});
