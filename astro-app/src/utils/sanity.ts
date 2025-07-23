import { sanityClient } from "sanity:client";
import type {
  DARK_THEME_QUERYResult,
  LIGHT_THEME_QUERYResult,
  TYPOGRAPHY_QUERYResult,
  LAYOUT_SETTINGS_QUERYResult,
  POSTS_QUERYResult,
  POST_BY_SLUG_QUERYResult,
  ABOUT_QUERYResult,
} from "../../../shared/sanity.types";
import groq from "groq";

const DARK_THEME_QUERY = groq`*[_type == "activeStyle"][0].activeConfigDark->{
  "primaryColor": primaryColor.hex,
  "secondaryColor": secondaryColor.hex,
  "backgroundColor": backgroundColor.hex,
  "surfaceColor": surfaceColor.hex,
  "textColor": textColor.hex,
  "borderColor": borderColor.hex,
  "cardBorderColor": cardBorderColor.hex,
  "cardBackgroundColor": cardBackgroundColor.hex,
  "cardHoverColor": cardHoverColor.hex,
  "cardTextColor": cardTextColor.hex,
  "cardTextHoverColor": cardTextHoverColor.hex,
  "cardImageBorderColor": cardImageBorderColor.hex,
  "headerBackgroundColor": headerBackgroundColor.hex,
  "headerBorderColor": headerBorderColor.hex,
  "titleTextColor": titleTextColor.hex,
  "navTextColor": navTextColor.hex,
  "titleTextHoverColor": titleTextHoverColor.hex,
  "navTextHoverColor": navTextHoverColor.hex,
  "footerTextColor": footerTextColor.hex,
  "footerLinkColor": footerLinkColor.hex,
  "footerLinkHoverColor": footerLinkHoverColor.hex,
  "footerBorderColor": footerBorderColor.hex,
  "articleBackgroundColor": articleBackgroundColor.hex,
  "articleTitleTextColor": articleTitleTextColor.hex,
  "articleTagColor": articleTagColor.hex,
  "articleTagTextColor": articleTagTextColor.hex,
  "articleTagTextHoverColor": articleTagTextHoverColor.hex,
  "articleSubtitleTextColor": articleSubtitleTextColor.hex,
  "articleBodyTextColor": articleBodyTextColor.hex,
  "articleImageBorderColor": articleImageBorderColor.hex
}`;

const LIGHT_THEME_QUERY = groq`*[_type == "activeStyle"][0].activeConfigLight->{
  "primaryColor": primaryColor.hex,
  "secondaryColor": secondaryColor.hex,
  "backgroundColor": backgroundColor.hex,
  "surfaceColor": surfaceColor.hex,
  "textColor": textColor.hex,
  "borderColor": borderColor.hex,
  "cardBorderColor": cardBorderColor.hex,
  "cardBackgroundColor": cardBackgroundColor.hex,
  "cardHoverColor": cardHoverColor.hex,
  "cardTextColor": cardTextColor.hex,
  "cardTextHoverColor": cardTextHoverColor.hex,
  "cardImageBorderColor": cardImageBorderColor.hex,
  "headerBackgroundColor": headerBackgroundColor.hex,
  "headerBorderColor": headerBorderColor.hex,
  "titleTextColor": titleTextColor.hex,
  "navTextColor": navTextColor.hex,
  "titleTextHoverColor": titleTextHoverColor.hex,
  "navTextHoverColor": navTextHoverColor.hex,
  "footerTextColor": footerTextColor.hex,
  "footerLinkColor": footerLinkColor.hex,
  "footerLinkHoverColor": footerLinkHoverColor.hex,
  "footerBorderColor": footerBorderColor.hex,
  "articleBackgroundColor": articleBackgroundColor.hex,
  "articleTitleTextColor": articleTitleTextColor.hex,
  "articleTagColor": articleTagColor.hex,
  "articleTagTextColor": articleTagTextColor.hex,
  "articleTagTextHoverColor": articleTagTextHoverColor.hex,
  "articleSubtitleTextColor": articleSubtitleTextColor.hex,
  "articleBodyTextColor": articleBodyTextColor.hex,
  "articleImageBorderColor": articleImageBorderColor.hex
}`;

const TYPOGRAPHY_QUERY = groq`*[_type == "activeStyle"][0].activeTypography->{
  sansSerifFont,
  serifFont,
  monospaceFont,
  fontSize,
  lineHeight
}`;

const LAYOUT_SETTINGS_QUERY = groq`*[_type == "activeStyle"][0].activeLayout->{
  maxWidth,
  customMaxWidth
}`;

const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)]{..., "categories": categories[]->name, "tags": tags[]->name} | order(_createdAt desc)`;

const POST_BY_SLUG_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{..., "categories": categories[]->name, "tags": tags[]->name}`;

const ABOUT_QUERY = groq`*[_type == "about"][0]`;

export async function getDarkTheme(): Promise<DARK_THEME_QUERYResult> {
  return await sanityClient.fetch(DARK_THEME_QUERY);
}

export async function getLightTheme(): Promise<LIGHT_THEME_QUERYResult> {
  return await sanityClient.fetch(LIGHT_THEME_QUERY);
}

export async function getTypography(): Promise<TYPOGRAPHY_QUERYResult> {
  return await sanityClient.fetch(TYPOGRAPHY_QUERY);
}

export async function getLayoutSettings(): Promise<LAYOUT_SETTINGS_QUERYResult> {
  return await sanityClient.fetch(LAYOUT_SETTINGS_QUERY);
}

export async function getPosts(): Promise<POSTS_QUERYResult> {
  return await sanityClient.fetch(POSTS_QUERY);
}

export async function getPost(slug: string): Promise<POST_BY_SLUG_QUERYResult> {
  return await sanityClient.fetch(POST_BY_SLUG_QUERY, {
    slug,
  });
}

export async function getAbout(): Promise<ABOUT_QUERYResult> {
  return await sanityClient.fetch(ABOUT_QUERY);
}
