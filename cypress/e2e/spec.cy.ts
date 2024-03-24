describe("Parser API", () => {
  it("should parse the text out of the pdf and return a response", () => {
    // Prepare a file to upload
    cy.fixture("test.pdf", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        // Create a File object
        const file = new File([fileContent], "test.pdf", {
          type: "application/pdf",
        });

        // Create form data
        const formData = new FormData();
        formData.set("file", file);

        // Send a POST request
        cy.request({
          method: "POST",
          url: "http://localhost:3000/api/parser", // replace with your route
          body: formData,
          form: false,
          headers: { "Content-Type": "application/json" },
        }).then(({ body, status }) => {
          const decoder = new TextDecoder("utf-8");
          const str: string = decoder.decode(body); //returns bianary so we have to decode it
          const realString = JSON.parse(str); // register the \n's and have it as a string

          console.log(realString);
          expect(status).to.equal(200); // request went through well

          //@ts-ignore
          expect(realString).to.equal(
            "\n\nTheAmericanalligatorisfoundintheUnitedStatesfromNorthCarolinatothe\nRioGrandeinTexas.Alligatorsareusuallyfoundinfreshwater,slow-moving\nrivers.Theyalsoliveinswamps,marshesandlakes.Theycanonlytolerate\nsaltwaterforbriefperiodsbecausetheydonothavesaltglands."
          );
        });
      });
  });

  it("should parse the text out of the text document and return a response", () => {
    // Prepare a file to upload
    cy.fixture("test.txt", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        // Create a File object
        const file = new File([fileContent], "test.txt", {
          type: "text/plain",
        });

        // Create form data
        const formData = new FormData();
        formData.set("file", file);

        // Send a POST request
        cy.request({
          method: "POST",
          url: "http://localhost:3000/api/parser", // replace with your route
          body: formData,
          form: false,
          headers: { "Content-Type": "application/json" },
        }).then(({ body, status }) => {
          const decoder = new TextDecoder("utf-8");
          const str: string = decoder.decode(body); //returns bianary so we have to decode it
          const realString = JSON.parse(str); // register the \n's and have it as a string

          console.log(realString);
          expect(status).to.equal(200); // request went through well

          //@ts-ignore
          expect(realString).to.equal(
            "Supply Chain by Amazon is a fully automated set of supply chain services that gets your products from manufacturers to customers around the world. Take advantage of a complete end-to-end solution that keeps products in stock, provides faster and more reliable shipping, and significantly lowers costs.\r\n"
          );
        });
      });
  });

  it("should parse the text out of the word document and return a response", () => {
    // Prepare a file to upload
    cy.fixture("test.docx", "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {
        // Create a File object
        const file = new File([fileContent], "test.docx", {
          type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        });

        // Create form data
        const formData = new FormData();
        formData.set("file", file);

        // Send a POST request
        cy.request({
          method: "POST",
          url: "http://localhost:3000/api/parser", // replace with your route
          body: formData,
          form: false,
          headers: { "Content-Type": "application/json" },
        }).then(({ body, status }) => {
          const decoder = new TextDecoder("utf-8");
          const str: string = decoder.decode(body); //returns bianary so we have to decode it
          const realString = JSON.parse(str); // register the \n's and have it as a string

          console.log(realString);
          expect(status).to.equal(200); // request went through well

          //@ts-ignore
          expect(realString).to.equal(
            "The platypus is a duck-billed, beaver-tailed, otter-footed, egg-laying aquatic creature native to Australia. If its appearance alone somehow fails to impress, the male of the species is also one of the world’s few venomous mammals! Equipped with sharp stingers on the heels of its hind feet, the male platypus can deliver a strong toxic blow to any approaching foe."
          );
        });
      });
  });
});

describe("OpenAI API", () => {
  it("should return a response from the OpenAI API", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/openai", // replace with your route
      body: {
        option: "Paragraph",
        text:
          "The American alligator is found in the United States from North Carolina to the Rio Grande in Texas. Alligators are usually found in freshwater, slow-moving rivers. They also live in swamps, marshes and lakes. They can only tolerate saltwater for brief periods because they do not have salt glands.",
      },
    }).then(({ body, status }) => {
      console.log(body);
      expect(status).to.equal(200); // request went through well
    });
  });
});