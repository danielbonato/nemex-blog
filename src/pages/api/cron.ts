export const prerender = false;

export async function GET() {
	const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;

	if (deployHookUrl) {
		try {
			const res = await fetch(deployHookUrl, { method: 'POST' });
			if (res.ok) {
				return new Response(
					JSON.stringify({
						success: true,
						message: 'Rebuild do blog disparado com sucesso via Deploy Hook!',
					}),
					{ status: 200, headers: { 'Content-Type': 'application/json' } }
				);
			}
		} catch (err: any) {
			return new Response(
				JSON.stringify({
					success: false,
					error: err?.message || 'Erro ao disparar o Deploy Hook',
				}),
				{ status: 500, headers: { 'Content-Type': 'application/json' } }
			);
		}
	}

	return new Response(
		JSON.stringify({
			success: true,
			message:
				'Cron da Vercel executado às 07:00 BRT. Dica: Para acionar o rebuild automático e publicar novos posts, cadastre a variável VERCEL_DEPLOY_HOOK_URL na Vercel.',
		}),
		{ status: 200, headers: { 'Content-Type': 'application/json' } }
	);
}
