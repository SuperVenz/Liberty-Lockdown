// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import mainImage from "./mainImage";
import Navigation from "./Navigation";
import Links from "./Links";
import Index from "./Index";
import ShopifyImage from "./ShopifyImage";
import metaData from "./metaData";
import colors from "./colors";
import icons from "./icons";
import socialMediaInfo from "./socialMediaInfo";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    mainImage,
    Navigation,
    Links,
    Index,
    ShopifyImage,
    metaData,
    colors,
    icons,
    socialMediaInfo,
    /* Your types here! */
  ]),
});
