// deno-lint-ignore-file no-explicit-any
import { Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";
import { State } from "./_middleware.ts";

export const handler: Handlers<any, State> = {
  GET(_req, ctx) {
    return ctx.render({...ctx.state});
  }
}

export default function Home(props: PageProps) {
  const isLoggedIn = !!props.data.token;

  return (
    <Layout 
      isLoggedIn={isLoggedIn} 
      active="/"
      title="Home | Fresh Auth"
      description="Welcome to Fresh Auth home page"
      keywords="fresh, auth, home"
      theme="light"
      showFooter={true}
    >
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col justify-center">
        {isLoggedIn ? (
          <div class="mx-auto text-center">
            <h1 class="text-2xl font-bold mb-5">Nice you're logged In!</h1>
            <a href="/auth/dashboard" type="button" class="text-white bg-blue-700 hover:bg-blue-800
             focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 
             mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Dashboard</a>
          </div>
        ) : (
          <div class="mx-auto text-center">
            <h1 class="text-2xl font-bold mb-5">Login to access all pages</h1>
            <a href="/login" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</a>
          </div>
        )}
      </div>
    </Layout>
  );
}
