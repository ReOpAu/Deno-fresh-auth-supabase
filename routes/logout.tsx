import { Handlers } from "$fresh/server.ts";
import { deleteCookie } from "std/http/cookie.ts";
import { State } from "./_middleware.ts";

export const handler: Handlers<unknown, State> = {
  async GET(_req, ctx) {
    try {
      const headers = new Headers();
      deleteCookie(headers, "supaLogin");

      // Call Supabase signOut method
      await ctx.state.supabaseClient.auth.signOut();

      headers.set("location", "/");
      return new Response(null, {
        status: 303,
        headers,
      });
    } catch (error) {
      console.error("Logout error:", error);
      return new Response("Logout failed", { status: 500 });
    }
  },
};
