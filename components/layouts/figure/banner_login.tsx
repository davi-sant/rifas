import Image from "next/image";
import "./banner_login_style.css"
export default function BannerLogin() {
    return (
        <figure className={`figure`}>
            <Image
                className={`figure-image`}
                src={"https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"}
                alt="Unsplash images"
                quality={100}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
            />
        </figure>
    );
}