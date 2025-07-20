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
  return (await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0]{activeConfigDark->}`
  )) as DarkTheme;
}

export async function getLightTheme() {
  return (await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0]{activeConfigLight->}`
  )) as LightTheme;
}

export async function getTypography() {
  return (await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0]{activeTypography->}`
  )) as Typography;
}

export async function getLayoutSettings() {
  return (await sanityClient.fetch(
    groq`*[_type == "activeStyle"][0]{activeLayout->}`
  )) as LayoutSettings;
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
