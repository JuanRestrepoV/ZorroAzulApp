import Layout from "../../Components/Navbar/Layout";

function NotFound() {
  return (
    <Layout>
      <div
        className="flex items-center justify-center h-screen bg-gray-100 w-full"
        style={{
          backgroundImage: "url('https://cdn.leonardo.ai/users/23c9e3eb-d568-4f3c-a760-04b864572bfc/generations/1a4f3363-cdfd-49b5-9426-74119eefd334/Leonardo_Kino_XL_Make_a_background_image_based_on_colors_and_f_3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">404</h1>
          <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
          <p className="mt-2 text-sm text-gray-500">The page you&#39;re looking for doesn&#39;t exist.</p>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
