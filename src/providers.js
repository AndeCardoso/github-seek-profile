import App from './App';
import { ResetCss } from './global/ResetCss';
import  GithubProvider from './providers/github-provider';

const Providers = () => {
    return (
        <main>
            <GithubProvider>
                <App />
                <ResetCss />
            </GithubProvider>
        </main>
    )
}

export default Providers;