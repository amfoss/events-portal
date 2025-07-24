import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.toString();
     const data=await axios.get(process.env.NEXT_PUBLIC_BACKEND_URL+"/seats-left")
    const currentSeats=data.data.seat_left
    if(currentSeats<=0&&!path.includes("seats-filled")){
      return NextResponse.redirect("https://openworkshop.vercel.app/register/seats-filled");
    }
  if (path.includes("https://events.amfoss.in/")) {
    return NextResponse.redirect("https://openworkshop.vercel.app/register");
  }
  
}

export const config = {
  matcher: ["/register(.*)"],
};
