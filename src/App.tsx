import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Shared/Layout/Layout';
import { useTranslation } from 'react-i18next';
import './styles/fonts.css';
import './app.css';
import './styles/properties-pagination.css';
import './styles/custom-antd.css';
import { store } from './api/store';
import { Provider } from 'react-redux';
import BuyPage from './pages/buyPage';
import BuyFooterText from './components/buy/BuyFooterText';
import ProfilePage from './pages/ProfilePage';
import ProductDetailsPage from './pages/ProductDetailsPage';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const { language } = i18n;

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1];
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n]);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* start replace with language */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route
            path="/login"
            element={<Navigate to={`/${language}/login`} replace />}
          />
          <Route
            path="/buy"
            element={<Navigate to={`/${language}/buy`} replace />}
          />
          <Route
            path="/profile"
            element={<Navigate to={`/${language}/profile`} replace />}
          />
          <Route
            path="/productDetails"
            element={<Navigate to={`/${language}/productDetails`} replace />}
          />
          {/* end replace with language */}
          <Route
            path="/:lang"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/:lang/buy"
            element={
              <Layout footerText={<BuyFooterText />}>
                <BuyPage />
              </Layout>
            }
          />
          <Route
            path="/:lang/profile"
            element={
              <Layout withoutFooter>
                <ProfilePage />
              </Layout>
            }
          />
          <Route
            path="/:lang/productDetails"
            element={
              <Layout>
                <ProductDetailsPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
