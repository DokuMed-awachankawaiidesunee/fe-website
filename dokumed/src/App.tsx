import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import History from "./pages/History";

// import GlobalErrorListener from './components/ErrorToaster';

export default function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/landing",
          element: <Landing />,
        },
        {
          path: "/patient",
          element: <History />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
