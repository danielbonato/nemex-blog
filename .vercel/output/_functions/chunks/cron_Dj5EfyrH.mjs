import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
//#region src/pages/api/cron.ts
var cron_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
async function GET() {
	const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL;
	if (deployHookUrl) try {
		if ((await fetch(deployHookUrl, { method: "POST" })).ok) return new Response(JSON.stringify({
			success: true,
			message: "Rebuild do blog disparado com sucesso via Deploy Hook!"
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (err) {
		return new Response(JSON.stringify({
			success: false,
			error: err?.message || "Erro ao disparar o Deploy Hook"
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
	return new Response(JSON.stringify({
		success: true,
		message: "Cron da Vercel executado às 07:00 BRT. Dica: Para acionar o rebuild automático e publicar novos posts, cadastre a variável VERCEL_DEPLOY_HOOK_URL na Vercel."
	}), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/cron@_@ts
var page = () => cron_exports;
//#endregion
export { page };
