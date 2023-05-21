import './bootstrap';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.withCredentials = true;//this is for cors on laravel we make credentials true and we add this

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config
})

ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <Home />
    </BrowserRouter>
)

