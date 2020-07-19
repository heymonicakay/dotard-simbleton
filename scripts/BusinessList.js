import { useBusiness } from "./BusinessProvider.js"
import { Business } from ".Business.js"

//    placeholders entered for initial commit.
//    need to write HTML file, then adjust placeholders to meet requirements 

const contentTarget = document.querySelector(".businesses")

const BusinessList = () => {
      const businessArray = useBusiness()
      contentTarget.innerHTML = "<h1>Businesses</h1>"

      businessArray.forEach(
            (businessObject) => {
                  contentTarget.innerHTML += Business(businessObject)
            }
      );
}