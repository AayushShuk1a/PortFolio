import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "aqbmgjjq",
  dataset: "production",
  token:
    "skwCTL5QFHoyzPxrNSLzCjJuQ5OVPDmmvBnHlZkUC5RCryDsHPWynuc2N8o0PS7Mh8RWl6HFxNNANDFGLFIu1UjaCJsgmHC0aUttlP1I0aeYKRBRGVDAlronwMusi7udQNjGJnQs6M1PVySRHFclZmEP2So8cfUi576jBGYYU29hFz6IDtwE",
  apiVersion: "2022-02-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
