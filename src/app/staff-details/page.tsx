import { redirect } from "next/navigation";

export default function StaffDetailsRedirect() {
  redirect("/about#staff-details");
}
