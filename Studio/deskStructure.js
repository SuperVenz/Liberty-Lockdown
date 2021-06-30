// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Settings Documents")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("SEO")
                .child(
                  S.document()
                    .schemaType("metaData")
                    .documentId("metaData")
                    .title("Edit")
                ),
              S.listItem()
                .title("Icons")
                .child(
                  S.document()
                    .schemaType("icons")
                    .documentId("icons")
                    .title("Edit")
                ),
              S.listItem()
                .title("Colors")
                .child(
                  S.document()
                    .schemaType("colors")
                    .documentId("colors")
                    .title("Edit")
                ),
            ])
        ),
      S.divider(),
      S.listItem()
        .title("Site Content")
        .child(
          S.list()
            // Sets a title for our new list
            .title("Main Content")
            // Add items to the array
            // Each will pull one of our new singletons
            .items([
              S.listItem()
                .title("Navigation Menu")
                .child(
                  S.document()
                    .schemaType("navigation")
                    .documentId("navigation")
                    .title("Edit")
                ),
              S.listItem()
                .title("Landing Page")
                .child(
                  S.document()
                    .schemaType("index")
                    .documentId("index")
                    .title("Edit")
                ),
            ])
        ),

      // We also need to remove the new singletons from the main list
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["metaData", "colors", "icons", "index", "navigation"].includes(
            listItem.getId()
          )
      ),
    ]);
