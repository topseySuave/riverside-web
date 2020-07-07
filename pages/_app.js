import Head from 'next/head'
import './output.css'

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Riverside - Peer Support Group | Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charset="UTF-8" />
            <meta name="keywords" content="Riverside, support, group, community, disabled, counselling" />
            <link rel="stylesheet" href="css/bootstrap.css" />
            <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
            <link href="css/font-awesome.css" rel="stylesheet" />
            <link href="//fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,600,700" rel="stylesheet" />
            <link href="//fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </>
)

export default App
