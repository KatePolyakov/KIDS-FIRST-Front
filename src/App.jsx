import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { KFCalendar } from '@components/Dashboard/Calendar';
import HomeDashboard from '@components/Dashboard/HomeDashboard';
import LandingLayout from '@components/shared/LandingLayout';

import { EventProvider } from '@context/EventContext';

import Activate from '@pages/Activate/Activate';
import Dashboard from '@pages/Dashboard/Dashboard';
import FeaturesPage from '@pages/FeaturesPage';
import ForgetPassword from '@pages/ForgetPassword';
import Home from '@pages/Home';
import Register from '@pages/Register';
import ResetPassword from '@pages/ResetPassword';
import Signin from '@pages/Signin';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route>
        <Route path='/' element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path='/features' element={<FeaturesPage />} />
        </Route>
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/register/:email/:family/:emailVerificationToken'
          element={<Register />}
        />
        <Route
          path='/activate/:email/:emailVerificationToken'
          element={<Activate />}
        />
        <Route path='/dashboard/*' element={<Dashboard />}>
          <Route
            path='calendarview'
            element={
              <EventProvider>
                <KFCalendar />
              </EventProvider>
            }
          />
          <Route path='homedashboard' element={<HomeDashboard />} />
        </Route>
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route
          path='/reset-password/:email/:resetPasswordToken'
          element={<ResetPassword />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
