import App from './App';
// import Footer from './components/footer';
import { ResetCss } from './global/ResetCss';
import  GithubProvider from './providers/github-provider';

const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <App />
                {/* <Footer /> */}
                <ResetCss />
            </GithubProvider>
        </main>
    )
}

export default Providers;