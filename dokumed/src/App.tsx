import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import History from "./pages/History";
import UserProvider from "./context/UserProvider";
import Dashboard from "./pages/Dashboard";
import DataDokter from "./pages/DataDokter";
import Obat from "./pages/Obat";
import { Navigate } from "react-router-dom";

export default function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "landing",
          element: <Landing />,
        },
        {
          path: "history",
          element: <History />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true, // ✅ This means path === /dashboard
          element: <Navigate to="dokter" replace />,
        },
        {
          path: "dokter",
          element: <DataDokter />,
        },
        {
          path: "obat",
          element: <Obat />,
        },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  );
}
