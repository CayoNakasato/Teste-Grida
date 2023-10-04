import { uploadOnBucket } from "./uploadOnBucket";

export async function extractImageUrlFromHtml(html: string) {
  const urlRegex = /https:\/\/s3-alpha-sig\.figma\.com\/img\/[^\s'")]+/g;
  const matches = html.match(urlRegex) || [];

  if (matches?.length > 0) {
    const imgFromOurBucket = matches.map(async imgUrl => await uploadOnBucket(imgUrl))

    return await Promise.all(imgFromOurBucket)
  }
  
  return matches;
}