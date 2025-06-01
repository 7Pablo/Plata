// app/page.js (Redirect to default language)
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/es"); 
}