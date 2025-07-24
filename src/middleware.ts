import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.toString();
  const currentSeats = await axios.get(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/seats-left/",
  );
  if(currentSeats.data.seat_left<=0 && !path.includes("/payment") && !path.includes("/seats-filled")){
    return NextResponse.redirect(path+"/seats-filled")
  }
  if (path.includes("https://events.amfoss.in/")||path.includes("3000")) {
    return NextResponse.redirect("https://openworkshop.vercel.app/register");
  }
}

export const config = {
  matcher: ["/register(.*)"],
};
