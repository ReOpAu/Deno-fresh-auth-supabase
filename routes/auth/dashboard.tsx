import Layout from "../../components/Layout.tsx";

export default function Dashboard() {
  return (
    <Layout 
      isLoggedIn={true} 
      active="/auth/dashboard"
      title="Dashboard | Fresh Auth"
      description="A dashboard route in Fresh Auth"
      keywords="fresh, auth, dashboard, protected"
      theme="light"
      showFooter={true}
    >
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <h1 class="text-3xl font-bold mb-5 text-center">This route is protected!</h1>
        <img class="mt-10 max-w-xs" src="/secure.svg" alt="Secure illustration" />
      </div>
    </Layout>
  );
}
