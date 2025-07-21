import { sanityClient } from "sanity:client";
import type {
  DarkTheme,
  LightTheme,
  Typography,
  LayoutSettings,
  Post,
  About,
} from "../../../studio/sanity.types";
import groq from "groq";

export async function getDarkTheme() {
  const result = await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0].activeConfigDark->{
      "primaryColor": primaryColor.hex,
      "secondaryColor": secondaryColor.hex,
      "backgroundColor": backgroundColor.hex,
      "surfaceColor": surfaceColor.hex,
      "textColor": textColor.hex,
      "borderColor": borderColor.hex
    }`
  );
  return result as DarkTheme;
}

export async function getLightTheme() {
  const result = await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0].activeConfigLight->{
      "primaryColor": primaryColor.hex,
      "secondaryColor": secondaryColor.hex,
      "backgroundColor": backgroundColor.hex,
      "surfaceColor": surfaceColor.hex,
      "textColor": textColor.hex,
      "borderColor": borderColor.hex
    }`
  );
  return result as LightTheme;
}

export async function getTypography() {
  const result = await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0].activeTypography->{
      sansSerifFont,
      serifFont,
      monospaceFont,
      fontSize,
      lineHeight
    }`
  );
  return result as Typography;
}

export async function getLayoutSettings() {
  const result = await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0].activeLayout->{
      maxWidth,
      customMaxWidth
    }`
  );
  return result as LayoutSettings;
}

export async function getPosts() {
  return (await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  )) as Post[];
}

export async function getPost(slug: string) {
  return (await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  )) as Post;
}

export async function getAbout() {
  return (await sanityClient.fetch(groq`*[_type == "about"][0]`)) as About;
}
