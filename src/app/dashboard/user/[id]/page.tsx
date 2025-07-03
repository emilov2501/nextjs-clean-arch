import { UserDetails } from "@/features/user";

export default async function Page({ params }: { params: { id: string } }) {
	return (
		<div className="min-h-screen bg-slate-200 flex items-center justify-center">
			<UserDetails userId={+params.id} />
		</div>
	);
}
