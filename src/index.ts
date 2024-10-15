
export default {
	async fetch(request, env, ctx): Promise<Response> {
		return  Response.json({
			message: "hello world I am abhilash"
		})
	},
} satisfies ExportedHandler<Env>;

// export interface Env{

// }

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		
// 			return Response.json({
// 				message: "you did not send a get request"
// 			});
// 	},
// }; 