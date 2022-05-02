import { USER_USERNAME, USER_PASSWORD } from '../../../support/config';
import { AlbumComponentsPage, AlbumDetailPage, AlbumUpdatePage } from '../../../support/pages/entities/album/album.po';
import albumSample from './album.json';

describe('Album entity', () => {
  const COMPONENT_TITLE = 'Albums';
  const SUBCOMPONENT_TITLE = 'Album';

  const albumPageUrl = '/tabs/entities/album';
  const albumApiUrl = '/api/albums';

  const albumComponentsPage = new AlbumComponentsPage();
  const albumUpdatePage = new AlbumUpdatePage();
  const albumDetailPage = new AlbumDetailPage();

  let album: any;

  beforeEach(() => {
    album = undefined;
    cy.login(USER_USERNAME, USER_PASSWORD);
  });

  describe('navigation test', () => {
    it('should load Albums page using menu and go back', () => {
      cy.visit('/tabs/home');
      // go to entity component page
      cy.get('ion-tab-button[tab="entities"]').click();
      cy.get('ion-item h2').contains(SUBCOMPONENT_TITLE).first().click();

      albumComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE).should('be.visible');
      cy.url().should('include', albumPageUrl);

      albumComponentsPage.back();
      cy.url().should('include', '/tabs/entities');
    });

    it('should load create Album page and go back', () => {
      cy.visit(albumPageUrl);
      albumComponentsPage.clickOnCreateButton();

      albumUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);

      albumUpdatePage.back();
      cy.url().should('include', albumPageUrl);
    });
  });

  describe('navigation test with items', () => {
    beforeEach(() => {
      cy.authenticatedRequest({
        method: 'POST',
        url: albumApiUrl,
        body: albumSample,
      }).then(({ body }) => {
        album = body;

        cy.intercept(
          {
            method: 'GET',
            url: `${albumApiUrl}+(?*|)`,
            times: 1,
          },
          {
            statusCode: 200,
            body: [album],
          }
        ).as('entitiesRequestInternal');
      });
    });

    afterEach(() => {
      if (album) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${albumApiUrl}/${album.id}`,
        }).then(() => {
          album = undefined;
        });
      }
    });

    it('should open Album view, open Album edit and go back', () => {
      cy.visit(albumPageUrl);
      albumComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      albumDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      if (album.title !== undefined && album.title !== null) {
        albumDetailPage.getTitleContent().contains(album.title);
      }
      albumDetailPage.edit();

      albumUpdatePage.back();
      albumDetailPage.back();
      cy.url().should('include', albumPageUrl);
    });

    it('should open Album view, open Album edit and save', () => {
      cy.visit(albumPageUrl);
      albumComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      albumDetailPage.getPageTitle().contains(SUBCOMPONENT_TITLE).should('be.visible');
      albumDetailPage.edit();

      albumUpdatePage.save();
      cy.url().should('include', albumPageUrl);
    });

    it('should delete Album', () => {
      cy.visit(albumPageUrl);
      albumComponentsPage.getPageTitle().should('be.visible');

      cy.wait('@entitiesRequestInternal');
      cy.get('ion-item').last().click();

      albumDetailPage.delete();
      cy.get('ion-alert button:not(.alert-button-role-cancel)').click();

      albumComponentsPage.getPageTitle().should('have.text', COMPONENT_TITLE);
      album = undefined;
    });
  });

  describe('creation test', () => {
    beforeEach(() => {
      cy.intercept({
        method: 'POST',
        url: albumApiUrl,
        times: 1,
      }).as('entitiesPost');
    });

    afterEach(() => {
      if (album) {
        cy.authenticatedRequest({
          method: 'DELETE',
          url: `${albumApiUrl}/${album.id}`,
        }).then(() => {
          album = undefined;
        });
      }
    });

    it('should create Album', () => {
      cy.visit(albumPageUrl + '/new');

      albumUpdatePage.getPageTitle().should('have.text', SUBCOMPONENT_TITLE);
      if (albumSample.title !== undefined && albumSample.title !== null) {
        albumUpdatePage.setTitleInput(albumSample.title);
      }
      if (albumSample.description !== undefined && albumSample.description !== null) {
        albumUpdatePage.setDescriptionInput(albumSample.description);
      }
      if (albumSample.created !== undefined && albumSample.created !== null) {
        albumUpdatePage.setCreatedInput(albumSample.created);
      }
      albumUpdatePage.save();

      cy.wait('@entitiesPost').then(({ response }) => {
        const { body } = response;
        album = body;
      });

      albumComponentsPage.getPageTitle().contains(COMPONENT_TITLE);
    });
  });
});
