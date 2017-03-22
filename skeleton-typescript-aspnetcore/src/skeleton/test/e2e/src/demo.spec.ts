import {PageObject_Welcome} from './welcome.po';
import {PageObject_Skeleton} from './skeleton.po';

describe('aurelia skeleton app', function() {
  let po_welcome: PageObject_Welcome;
  let po_skeleton: PageObject_Skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_welcome = new PageObject_Welcome();

    browser.loadAndWaitForAureliaPage("http://localhost:5000");
  });

  it('should load the page and display the initial page title', () => {
    expect<any>(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
  });

  it('should display greeting', () => {
    expect<any>(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
  });

  it('should automatically write down the fullname', () => {
    po_welcome.setFirstname('Rob');
    po_welcome.setLastname('Eisenberg');

    // For now there is a timing issue with the binding.
    // Until resolved we will use a short sleep to overcome the issue.
    browser.sleep(200);
    expect<any>(po_welcome.getFullname()).toBe('ROB EISENBERG');
  });

/*
  // Turned off due to a Chrome Bug
  it('should show alert message when clicking submit button', () => {
    expect(po_welcome.openAlertDialog()).toBe(true);
  });
*/

  it('should navigate to users page', () => {
    po_skeleton.navigateTo('#/users');
    browser.sleep(200);
    expect<any>(po_skeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
  });
});
