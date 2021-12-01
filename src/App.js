// This is import all important file that need in the web application
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Menubar from './Pages/Shared/MenuBar/Menubar';
import Footer from './Pages/Shared/Footer/Footer';
import ProductPage from './Pages/Products/ProductPage';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import AddProduct from './Pages/AddProduct/AddProduct';
import Reviews from './Pages/Reviews/Reviews';
import AddReview from './Pages/AddReview/AddReview';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import MyOrders from './Pages/MyOrder/MyOrders';
import ManageAllOrdres from './Pages/ManageAllOrder/ManageAllOrdres';
import PayBill from './Pages/Pay/PayBill';
import AdminRoute from './Pages/PrivateRoute/AdminRoute';
import PageNotFound from './Pages/PageNoteFound/PageNotFound';

// This is app Function Start
function App() {
  return (
    // Here I use AuthProvider the get information.
    <div>
      <AuthProvider>
        {/* This is Route for menubar */}
        <Router>
          <Menubar></Menubar>
          <Switch>
            {/* This is for Home Page */}
            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* This is for Home Page  Too*/}
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* This is for Product Page */}
            <Route exact path="/products">
              <ProductPage></ProductPage>
            </Route>
            {/* This is for Register Page */}
            <Route exact path="/register">
              <Register></Register>
            </Route>
            {/* This is for Login Page */}
            <Route exact path="/login">
              <Login></Login>
            </Route>
            {/* This is for Add Product Page */}
            <AdminRoute exact path="/addProduct">
              <AddProduct></AddProduct>
            </AdminRoute>
            {/* This is for Review Page */}
            <Route exact path="/reviews">
              <Reviews></Reviews>
            </Route>
            {/* This is for Add Review  Page */}
            <Route exact path="/addReview">
              <AddReview></AddReview>
            </Route>
            {/* This is for Identify Product Page */}
            <PrivateRoute exact path="/products/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            {/* This is for make Admin  Page. This only for admin user */}
            <AdminRoute exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            {/* This is for My Order  Page */}
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            {/* This is for Manage All Order Page .This only for admin user */}
            <AdminRoute exact path="/manageAllOrders">
              <ManageAllOrdres></ManageAllOrdres>
            </AdminRoute>
            {/* This is for Pay Bill  Page . */}
            <PrivateRoute exact path="/pay">
              <PayBill></PayBill>
            </PrivateRoute>
            {/* This is Page NOt Found Page */}
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          {/* This is for Footer Section */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}
// This is end of the app.js code .

export default App;
