import { GetServerSideProps } from 'next';

const HomeLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            홈 레이아웃
            {children}
        </div>
    );
}


export default HomeLayout