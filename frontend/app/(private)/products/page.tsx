import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Products() {
    const session = (await cookies()).get("ib_user")?.value;

    if (!session) {
        return redirect("/login");
    }

    return <></>;
}
