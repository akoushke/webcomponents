import '@babel/polyfill';
import '../../../../webComponents/firstComponent';

class Cordova {
  constructor() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  }

  /**
   * Handle the deviceready event
   * @see http://cordova.apache.org/docs/en/5.4.0/cordova/events/events.deviceready.html
   * @emits {deviceready} a deviceready event
   * @param {Event} the deviceready event object
   */
  onDeviceReady() {
    this.receivedEvent('deviceready');
  }
  
  // Update DOM on a Received Event
  receivedEvent() {
    document.body.innerHTML = `<my-first-web-component> </my-first-web-component>`;
    }   

}
new Cordova();