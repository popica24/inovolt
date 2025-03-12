import Layout from 'layout';
import AboutUs from 'pages/AboutUs/AboutUs';
import Contact from 'pages/Contact';
import Future from 'pages/Future';
import Guide from 'pages/Guide';
import Homepage from 'pages/Homepage';
import SmartHome from 'pages/SmartHome';
import ValidateBattery from 'pages/ValidateBattery';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'despre-inovolt',
        element: <AboutUs />,
      },
      {
        path: 'ghid-baterii',
        element: <Guide />,
      },
      {
        path: 'bateriile-inovolt',
        element: <Future />,
      },
      {
        path: 'casa-smart',
        element: <SmartHome />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'inregistrare-produs',
        element: <ValidateBattery />,
      },
    ],
  },
]);

export default router;
