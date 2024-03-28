import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Layout from "./components/Layout";
import ApplicantsLogin from "./components/ApplicantsLogin";
import ApplicantsSignup from "./components/ApplicantsSignup";
import TerraformersLogin from "./components/TerraformersLogin";
import TerraformersSignup from "./components/TerraformersSignup"
import JobPost from "./components/JobPost";
import AllJobs from "./components/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "applicantsLogin",
        element: <ApplicantsLogin />
      },
      {
        path: "applicantsSignup",
        element: <ApplicantsSignup />
      },
      {
        path: "terraformersLogin",
        element: <TerraformersLogin />
      },
      {
        path: "terraformersSignup",
        element: <TerraformersSignup />
      },
      {
        path: "jobpost",
        element: <JobPost />
      },
      {
        path:"alljobs",
        element:<AllJobs/>
      }
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
