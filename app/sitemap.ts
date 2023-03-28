import { allBlogs } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://luisignacio.cc/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "/about", "/blog", "/uses"].map((route) => ({
    url: `https://luisignacio.cc${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
