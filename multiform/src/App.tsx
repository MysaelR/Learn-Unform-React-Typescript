import { Router } from './routes/router';
import { FormProvider } from './contexts/FormContext'
function App() {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;
