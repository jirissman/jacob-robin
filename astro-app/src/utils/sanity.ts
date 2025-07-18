import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

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

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset & { alt?: string };
  body: PortableTextBlock[];
}

export interface About {
  _type: "about";
  title?: string;
  body: PortableTextBlock[];
  image?: ImageAsset & { alt?: string };
}
