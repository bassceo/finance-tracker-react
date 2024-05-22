import { Link, useLocation } from 'react-router-dom';
import './styles/NavBar.css';
import { useState, useEffect } from 'react';

const NavBar = () => {

    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState('');

    useEffect(() => {
        setActiveMenu(location.pathname);
    }, [location]);

    return (
        <nav className="navbar">
            <div className="name">
                <h2 href="#">Умный бюджет</h2>
            </div>
            <div className="menu">
                <ul>
                    {/* <li className={activeMenu === "/" ? "activeMenu" : ""}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.48225 1.02251e-07H4.76775C5.21865 -3.64775e-06 5.58233 -7.51717e-06 5.87835 0.02019C6.1827 0.0409575 6.45187 0.0847389 6.70672 0.190301C7.31929 0.444038 7.80596 0.930713 8.05969 1.54328C8.16525 1.79813 8.20905 2.0673 8.22982 2.37165C8.25 2.66768 8.25 3.03135 8.25 3.48225V4.76775C8.25 5.21865 8.25 5.58236 8.22982 5.87835C8.20905 6.1827 8.16525 6.45187 8.05969 6.70672C7.80596 7.31929 7.31929 7.80596 6.70672 8.05969C6.45187 8.16525 6.1827 8.20905 5.87835 8.22982C5.58233 8.25 5.21865 8.25 4.76775 8.25H3.48225C3.03135 8.25 2.66768 8.25 2.37165 8.22982C2.0673 8.20905 1.79813 8.16525 1.54328 8.05969C0.930713 7.80596 0.444038 7.31929 0.190301 6.70672C0.0847389 6.45187 0.0409575 6.1827 0.02019 5.87835C-7.51717e-06 5.58233 -3.64775e-06 5.21865 1.02251e-07 4.76775V3.48225C-3.64775e-06 3.03135 -7.51717e-06 2.66768 0.02019 2.37165C0.0409575 2.0673 0.0847389 1.79813 0.190301 1.54328C0.444038 0.930713 0.930713 0.444038 1.54328 0.190301C1.79813 0.0847389 2.0673 0.0409575 2.37165 0.02019C2.66768 -7.51717e-06 3.03135 -3.64775e-06 3.48225 1.02251e-07ZM2.43971 1.01786C2.18625 1.03515 2.03865 1.06751 1.92596 1.11416C1.55843 1.26641 1.26641 1.55843 1.11416 1.92596C1.06751 2.03865 1.03515 2.18625 1.01786 2.43971C1.00028 2.69768 1.00001 3.02722 1.00001 3.49999V4.75001C1.00001 5.22278 1.00028 5.55233 1.01786 5.81029C1.03515 6.06375 1.06751 6.21135 1.11416 6.32404C1.26641 6.69157 1.55843 6.98359 1.92596 7.13584C2.03865 7.18249 2.18625 7.21485 2.43971 7.23214C2.69768 7.24972 3.02722 7.24999 3.49999 7.24999H4.75001C5.22278 7.24999 5.55233 7.24972 5.81029 7.23214C6.06375 7.21485 6.21135 7.18249 6.32404 7.13584C6.69157 6.98359 6.98359 6.69157 7.13584 6.32404C7.18249 6.21135 7.21485 6.06375 7.23214 5.81029C7.24972 5.55233 7.24999 5.22278 7.24999 4.75001V3.49999C7.24999 3.02722 7.24972 2.69768 7.23214 2.43971C7.21485 2.18625 7.18249 2.03865 7.13584 1.92596C6.98359 1.55843 6.69157 1.26641 6.32404 1.11416C6.21135 1.06751 6.06375 1.03515 5.81029 1.01786C5.55233 1.00028 5.22278 1.00001 4.75001 1.00001H3.49999C3.02722 1.00001 2.69768 1.00028 2.43971 1.01786ZM3.48225 9.75H4.76775C5.21865 9.75 5.58233 9.75 5.87835 9.77017C6.1827 9.79095 6.45187 9.83475 6.70672 9.94031C7.31929 10.194 7.80596 10.6807 8.05969 11.2933C8.16525 11.5481 8.20905 11.8173 8.22982 12.1217C8.25 12.4177 8.25 12.7813 8.25 13.2322V14.5178C8.25 14.9687 8.25 15.3324 8.22982 15.6283C8.20905 15.9327 8.16525 16.2019 8.05969 16.4567C7.80596 17.0693 7.31929 17.556 6.70672 17.8097C6.45187 17.9153 6.1827 17.9591 5.87835 17.9798C5.58233 18 5.21865 18 4.76775 18H3.48225C3.03135 18 2.66768 18 2.37165 17.9798C2.0673 17.9591 1.79813 17.9153 1.54328 17.8097C0.930713 17.556 0.444038 17.0693 0.190301 16.4567C0.0847389 16.2019 0.0409575 15.9327 0.02019 15.6283C-7.51717e-06 15.3323 -3.64775e-06 14.9687 1.02251e-07 14.5178V13.2322C-3.64775e-06 12.7813 -7.51717e-06 12.4177 0.02019 12.1217C0.0409575 11.8173 0.0847389 11.5481 0.190301 11.2933C0.444038 10.6807 0.930713 10.194 1.54328 9.94031C1.79813 9.83475 2.0673 9.79095 2.37165 9.77017C2.66768 9.75 3.03135 9.75 3.48225 9.75ZM2.43971 10.7679C2.18625 10.7851 2.03865 10.8175 1.92596 10.8642C1.55843 11.0164 1.26641 11.3084 1.11416 11.676C1.06751 11.7886 1.03515 11.9363 1.01786 12.1897C1.00028 12.4477 1.00001 12.7772 1.00001 13.25V14.5C1.00001 14.9728 1.00028 15.3023 1.01786 15.5603C1.03515 15.8137 1.06751 15.9614 1.11416 16.074C1.26641 16.4416 1.55843 16.7336 1.92596 16.8858C2.03865 16.9325 2.18625 16.9649 2.43971 16.9821C2.69768 16.9997 3.02722 17 3.49999 17H4.75001C5.22278 17 5.55233 16.9997 5.81029 16.9821C6.06375 16.9649 6.21135 16.9325 6.32404 16.8858C6.69157 16.7336 6.98359 16.4416 7.13584 16.074C7.18249 15.9614 7.21485 15.8137 7.23214 15.5603C7.24972 15.3023 7.24999 14.9728 7.24999 14.5V13.25C7.24999 12.7772 7.24972 12.4477 7.23214 12.1897C7.21485 11.9363 7.18249 11.7886 7.13584 11.676C6.98359 11.3084 6.69157 11.0164 6.32404 10.8642C6.21135 10.8175 6.06375 10.7851 5.81029 10.7679C5.55233 10.7503 5.22278 10.75 4.75001 10.75H3.49999C3.02722 10.75 2.69768 10.7503 2.43971 10.7679ZM13.2322 1.02251e-07H14.5178C14.9687 -3.64775e-06 15.3323 -7.51717e-06 15.6283 0.02019C15.9327 0.0409575 16.2019 0.0847389 16.4567 0.190301C17.0693 0.444038 17.556 0.930713 17.8097 1.54328C17.9153 1.79813 17.9591 2.0673 17.9798 2.37165C18 2.66768 18 3.03135 18 3.48225V4.76775C18 5.21865 18 5.58236 17.9798 5.87835C17.9591 6.1827 17.9153 6.45187 17.8097 6.70672C17.556 7.31929 17.0693 7.80596 16.4567 8.05969C16.2019 8.16525 15.9327 8.20905 15.6283 8.22982C15.3323 8.25 14.9687 8.25 14.5178 8.25H13.2322C12.7813 8.25 12.4177 8.25 12.1217 8.22982C11.8173 8.20905 11.5481 8.16525 11.2933 8.05969C10.6807 7.80596 10.194 7.31929 9.94031 6.70672C9.83475 6.45187 9.79095 6.1827 9.77017 5.87835C9.75 5.58233 9.75 5.21865 9.75 4.76775V3.48225C9.75 3.03135 9.75 2.66768 9.77017 2.37165C9.79095 2.0673 9.83475 1.79813 9.94031 1.54328C10.194 0.930713 10.6807 0.444038 11.2933 0.190301C11.5481 0.0847389 11.8173 0.0409575 12.1217 0.02019C12.4177 -7.51717e-06 12.7813 -3.64775e-06 13.2322 1.02251e-07ZM12.1897 1.01786C11.9363 1.03515 11.7886 1.06751 11.676 1.11416C11.3084 1.26641 11.0164 1.55843 10.8642 1.92596C10.8175 2.03865 10.7851 2.18625 10.7679 2.43971C10.7503 2.69768 10.75 3.02722 10.75 3.49999V4.75001C10.75 5.22278 10.7503 5.55233 10.7679 5.81029C10.7851 6.06375 10.8175 6.21135 10.8642 6.32404C11.0164 6.69157 11.3084 6.98359 11.676 7.13584C11.7886 7.18249 11.9363 7.21485 12.1897 7.23214C12.4477 7.24972 12.7772 7.24999 13.25 7.24999H14.5C14.9728 7.24999 15.3023 7.24972 15.5603 7.23214C15.8137 7.21485 15.9614 7.18249 16.074 7.13584C16.4416 6.98359 16.7336 6.69157 16.8858 6.32404C16.9325 6.21135 16.9649 6.06375 16.9821 5.81029C16.9997 5.55233 17 5.22278 17 4.75001V3.49999C17 3.02722 16.9997 2.69768 16.9821 2.43971C16.9649 2.18625 16.9325 2.03865 16.8858 1.92596C16.7336 1.55843 16.4416 1.26641 16.074 1.11416C15.9614 1.06751 15.8137 1.03515 15.5603 1.01786C15.3023 1.00028 14.9728 1.00001 14.5 1.00001H13.25C12.7772 1.00001 12.4477 1.00028 12.1897 1.01786ZM13.2322 9.75H14.5178C14.9687 9.75 15.3323 9.75 15.6283 9.77017C15.9327 9.79095 16.2019 9.83475 16.4567 9.94031C17.0693 10.194 17.556 10.6807 17.8097 11.2933C17.9153 11.5481 17.9591 11.8173 17.9798 12.1217C18 12.4177 18 12.7813 18 13.2322V14.5178C18 14.9687 18 15.3324 17.9798 15.6283C17.9591 15.9327 17.9153 16.2019 17.8097 16.4567C17.556 17.0693 17.0693 17.556 16.4567 17.8097C16.2019 17.9153 15.9327 17.9591 15.6283 17.9798C15.3323 18 14.9687 18 14.5178 18H13.2322C12.7813 18 12.4177 18 12.1217 17.9798C11.8173 17.9591 11.5481 17.9153 11.2933 17.8097C10.6807 17.556 10.194 17.0693 9.94031 16.4567C9.83475 16.2019 9.79095 15.9327 9.77017 15.6283C9.75 15.3323 9.75 14.9687 9.75 14.5178V13.2322C9.75 12.7813 9.75 12.4177 9.77017 12.1217C9.79095 11.8173 9.83475 11.5481 9.94031 11.2933C10.194 10.6807 10.6807 10.194 11.2933 9.94031C11.5481 9.83475 11.8173 9.79095 12.1217 9.77017C12.4177 9.75 12.7813 9.75 13.2322 9.75ZM12.1897 10.7679C11.9363 10.7851 11.7886 10.8175 11.676 10.8642C11.3084 11.0164 11.0164 11.3084 10.8642 11.676C10.8175 11.7886 10.7851 11.9363 10.7679 12.1897C10.7503 12.4477 10.75 12.7772 10.75 13.25V14.5C10.75 14.9728 10.7503 15.3023 10.7679 15.5603C10.7851 15.8137 10.8175 15.9614 10.8642 16.074C11.0164 16.4416 11.3084 16.7336 11.676 16.8858C11.7886 16.9325 11.9363 16.9649 12.1897 16.9821C12.4477 16.9997 12.7772 17 13.25 17H14.5C14.9728 17 15.3023 16.9997 15.5603 16.9821C15.8137 16.9649 15.9614 16.9325 16.074 16.8858C16.4416 16.7336 16.7336 16.4416 16.8858 16.074C16.9325 15.9614 16.9649 15.8137 16.9821 15.5603C16.9997 15.3023 17 14.9728 17 14.5V13.25C17 12.7772 16.9997 12.4477 16.9821 12.1897C16.9649 11.9363 16.9325 11.7886 16.8858 11.676C16.7336 11.3084 16.4416 11.0164 16.074 10.8642C15.9614 10.8175 15.8137 10.7851 15.5603 10.7679C15.3023 10.7503 14.9728 10.75 14.5 10.75H13.25C12.7772 10.75 12.4477 10.7503 12.1897 10.7679Z" fill="#AFAFAF"/>
</svg>
<Link  to="/">Главная</Link></li> */}
                    <li className={activeMenu === "/accounts" ? "activeMenu" : ""}><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V9C1 9.53043 1.21071 10.0391 1.58579 10.4142C1.96086 10.7893 2.46957 11 3 11H5L15 5ZM7 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V13C5 13.5304 5.21071 14.0391 5.58579 14.4142C5.96086 14.7893 6.46957 15 7 15ZM14 10C14 10.5304 13.7893 11.0391 13.4142 11.4142C13.0391 11.7893 12.5304 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2107 11.0391 10 10.5304 10 10C10 9.46957 10.2107 8.96086 10.5858 8.58579C10.9609 8.21071 11.4696 8 12 8C12.5304 8 13.0391 8.21071 13.4142 8.58579C13.7893 8.96086 14 9.46957 14 10V10Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<Link to="/accounts">Счета</Link></li>
                    <li className={activeMenu === "/transactions" ? "activeMenu" : ""}><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17L11 13M5 13V1V13ZM5 1L1 5L5 1ZM5 1L9 5L5 1ZM15 5V17V5ZM15 17L19 13L15 17Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <Link to="/transactions">Транзакции</Link></li>
                    {/* <li className={activeMenu === "/reports" ? "activeMenu" : ""}>    
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.24463 13.781L8.23763 9.89103L11.6516 12.573L14.5806 8.79303" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.9948 5.12202C19.0562 5.12202 19.9168 4.26151 19.9168 3.20002C19.9168 2.13852 19.0562 1.27802 17.9948 1.27802C16.9333 1.27802 16.0728 2.13852 16.0728 3.20002C16.0728 4.26151 16.9333 5.12202 17.9948 5.12202Z" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.9243 2.12018H5.65655C2.64511 2.12018 0.777832 4.2529 0.777832 7.26434V15.3467C0.777832 18.3582 2.6085 20.4817 5.65655 20.4817H14.2607C17.2721 20.4817 19.1394 18.3582 19.1394 15.3467V8.30782" stroke="#AFAFAF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Link to="/reports">Отчеты</Link></li> */}
                </ul>
            </div>
            <div className='rightMenu'>
                {/* <a className='notifications'><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="#F5F6FA"/>
                    <path d="M22.5 15C22.5 13.8065 22.0259 12.6619 21.182 11.818C20.3381 10.9741 19.1935 10.5 18 10.5C16.8065 10.5 15.6619 10.9741 14.818 11.818C13.9741 12.6619 13.5 13.8065 13.5 15C13.5 20.25 11.25 21.75 11.25 21.75H24.75C24.75 21.75 22.5 20.25 22.5 15Z" stroke="#D6D7DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.2976 24.75C19.1658 24.9773 18.9765 25.166 18.7488 25.2971C18.5211 25.4283 18.2629 25.4973 18.0001 25.4973C17.7374 25.4973 17.4792 25.4283 17.2515 25.2971C17.0238 25.166 16.8345 24.9773 16.7026 24.75" stroke="#D6D7DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Уведомления
                </a> */}
                <h3 className="accountName"> Пользователь</h3>
            </div>
        </nav>
    );
}

export default NavBar;