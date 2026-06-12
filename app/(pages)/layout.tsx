export default function Layout({children}:{
    children: React.ReactNode;
}) {
    return <div className="bg-neutral-100 py-21 px-30">
        {children}
    </div>
};
