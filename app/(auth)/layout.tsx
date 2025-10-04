import Image from "next/image";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="bg-orange-200 w-screen h-screen overflow-hidden">
            <div className="place-content-center place-self-center">
                <Image src="/Oxxo_Logo.png" alt="Logo de Oxxo" width={200} className="place-self-center w-full my-10" height={0}/>
                {children}
            </div>
        </div>
    );
}