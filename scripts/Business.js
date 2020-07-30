// placeholders entered for initial commit.
// need to write HTML and then adjust placeholders to meet requirements.

export const companyHTML = (companyInfo) => {
      return `
            <article class="container container--business-card">
                  <h2 class="heading heading--company-card company-name">
                        ${companyInfo.companyName}
                  </h2>
                  <section class="container company--details container--company-details">
                        <div class="list-item company-address">${companyInfo.addressFullStreet}</div>
                        <div class="list-item company-city">${companyInfo.addressCity}, ${addressStateCode} ${addressZipCode}</div> 
                        `
}