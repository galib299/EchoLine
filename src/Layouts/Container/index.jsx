import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import style from './style.module.scss';

const { Content } = Layout;

const Index = () => {
    return (
        <Content className={style.Container} >
            <Outlet />
        </Content>
    )
}
export default Index;