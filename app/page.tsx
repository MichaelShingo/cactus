'use client';
import AppStateProvider from './context/AppStateContext';
import KeyPressHandler from './components/KeyPressHandler';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/theme';
import Flash from './components/Flash';
import AppContainer from './components/AppContainer';
import AudioComponent from './components/AudioComponent';

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<AppStateProvider>
				<AudioComponent />
				<Flash />
				<KeyPressHandler />
				<AppContainer>
					<p></p>
				</AppContainer>
			</AppStateProvider>
		</ThemeProvider>
	);
}
