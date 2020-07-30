import { useBusiness } from "./BusinessProvider.js"
import { companyHTML } from ".Business.js"

//    placeholders entered for initial commit.
//    need to write HTML file, then adjust placeholders to meet requirements 

const businessListTarget = document.querySelector(".businesses")

const BusinessList = () => {

      const businessArray = useBusiness()

      businessListTarget.innerHTML = `
      <h1 class="heading list--heading business__list--heading">
      Businesses
      </h1>`

      businessArray.forEach(
            (companyInfo) => {
                  contentTarget.innerHTML += companyHTML(companyInfo)
            }
      );
}