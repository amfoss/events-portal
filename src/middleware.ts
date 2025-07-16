import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {  
  const path = req.nextUrl.toString();
  if(path.includes("https://events.amfoss.in/")){
    return NextResponse.redirect("https://openworkshop.vercel.app/register");
  }
}

export const config = {
  matcher: ["/register(.*)"],
};
