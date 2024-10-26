import Layout from "../../components/Layout.tsx";

export default function Welcome() {
  return (
    <Layout 
      isLoggedIn={true} 
      active="/auth/welcome"
      title="Welcome Page | Fresh Auth"
      description="A welcome route in Fresh Auth"
      keywords="fresh, auth, welcome, protected"
      theme="light"
      showFooter={true}
    >
      <div class="mt-10 px-5 mx-auto flex max-w-screen-md flex-col items-center justify-center">
        <h1 class="text-3xl font-bold mb-5 text-center">Welcome!</h1>
        <p> Thanks for sigining up! </p>
      </div>
    </Layout>
  );
}
