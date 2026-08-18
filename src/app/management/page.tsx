import { redirect } from "next/navigation";

export default function ManagementRedirect() {
  redirect("/about#management");
}
