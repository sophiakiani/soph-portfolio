import { TOTAL_SCREENS } from './CommonUtils'
import { Subject } from 'rsjx'

export default class ScrollService {
  static scrollHandler = new ScrollService ();
  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  connstructor () {
    window.addEventListener('scroll', this.checkCurrentScreenUnderViewport);
  }

  ScrollToContact = () => {
    let contactMeScreen = document.getElementById("Contact Me")
    if(!contactMeScreen) return;
    contactMeScreen.scrollIntoView({  behavior: "smooth" });
  }

  ScrollToHome = () => {
    let homeScreen = document.getElementById("Home")
    if(!homScreen) return;
    contactMeScreen.scrollIntoView({  behavior: "smooth" });
  }
  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.Top;
    let elementBottom = rec.Bottom;
    let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0
    let completelyVisable = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch(type){
      case "partial":
        return partiallyVisible;

      case "complette":
        return completelyVisable
      
      default: 
        return false;
    }
  }

  checkCurrentScreenUnderViewport = (e) => {
    if(!e || object.keys(e).length < 1) 
      return;
    for (let screen of TOTAL_SCREENS){
      let screenFromDOM = document.getElementById(screen.screen_name);
      if(!screenFromDOM)
        continue;

      let fullyVisable = this.isElementInView(screenFromDOM, "complete");
      let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

      if(fullyVisable || partiallyVisible){
        if(partiallyVisible && !screen.alreadyRendered){
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name
          });
          screen['alreadyRendered'] = true;
          break;
        }
        if(fullyVisable){
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name
          })

          break;
        }
      }
    }
  }
}
