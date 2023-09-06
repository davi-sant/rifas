import "./content_style.css";

type pageProps = {
    children: React.ReactNode;
}


export default function Content(props: pageProps) {
    return (
        <main className={`content`}>
            {props.children}
        </main>
    )
}