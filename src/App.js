import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import { OptimizelyProvider  } from '@optimizely/react-sdk';
import { generateUserid } from './helpers/helpers';
import { getOrInitializeOptimizely } from './optimizely/optimizely';


const Shop = () => {
  return (
    <div><h1>Shop Page</h1></div>
  );
}

const App = () => {
  const optimizely = getOrInitializeOptimizely();
  const userId = generateUserid();
  

  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{id: userId}}
    >
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </OptimizelyProvider>
  );
}

export default App;
