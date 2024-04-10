import { GetServerSideProps } from 'next';

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            에프터 로그인 레이아웃
            {children}
        </div>
    );
}


export default AfterLoginLayout