import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
  projectId: "o2s8jcez",
  dataset: "protfolio",
  useCdn: true,
  apiVarsion: "1",
  token:
    "skb8dBEdFA4xmkbFAjMXkg1iDQJUzRuz85drrAZPQiQIeMUU5SiaXFc5fdHhKPh47qrlSgl01WTJWzmWHAsc8up0CeZ36ZcMKgF8hxU0UfIwNCXPIa775cMgJGGNEK2GFoKCXZXLO7fGLFiS5GfzzhZ9xI6AjrupaLdeAhGSw15ZqpSopghB",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
