import { Helmet } from "react-helmet-async";

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Register | Kospa</title>
            <meta name="keep-open-source-alive" />
            <meta title="keep open source alive" />
            <meta name="make open source program alive" />
            <meta name="description" content="Keep Open Source Alive - An open-source project aimed at keeping other open-source projects alive and maintained." />
            <meta name="keywords" content="open source, keep open source alive, maintain open source projects" />
            <meta name="author" content="Arif Miah" />
            <meta property="og:title" content="Keep Open Source Alive" />
            <meta property="og:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
            <meta property="og:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
            <meta property="og:url" content="https://keep-open-source-alive.web.app" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Keep Open Source Alive" />
            <meta name="twitter:description" content="An open-source project aimed at keeping other open-source projects alive and maintained." />
            <meta name="twitter:image" content="https://keep-open-source-alive.web.app/keep-open-source-alive-image.jpg" />
        </Helmet>
            <h1>this is register Page!</h1>
        </div>
    );
};

export default Register;