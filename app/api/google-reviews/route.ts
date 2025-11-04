import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { rating: 5.0, user_ratings_total: 227 },
      { status: 200 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("Google API error");
    const data = await res.json();
    const result = data?.result;
    return NextResponse.json(
      {
        rating: result?.rating ?? 5.0,
        user_ratings_total: result?.user_ratings_total ?? 227,
        reviews: result?.reviews?.slice(0, 6)?.map((r: any) => ({
          author_name: r.author_name,
          text: r.text,
          rating: r.rating,
        })),
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { rating: 5.0, user_ratings_total: 227 },
      { status: 200 }
    );
  }
}


