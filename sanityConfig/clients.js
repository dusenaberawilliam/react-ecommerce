const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "92ketlbh",
  dataset: "production",
  apiVersion: "2022-11-21",
  token:
    "sk6ErP346KZzQsAMY3uBzVHouZFFILV7ummbxnvKPCEaQS5tqjnJoSxLjR1TlPXzGu98WZI8V8Mv2s19st4KM6WhpSQMdf7DKPXhPfJQOppgNERdPQhCdPcLNEyHWc3n0JlvEMsC1nZkAjsV7bmDz1vQrEJyA8kSyLUeUzG6dxoENgaND3Lf", // or leave blank for unauthenticated usage
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
