'use client';
import AppStateProvider from './context/AppStateContext';
import KeyPressHandler from './components/KeyPressHandler';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/darkTheme';
import Flash from './components/Flash';

import AppContainer from './components/AppContainer';

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<AppStateProvider>
				<Flash />
				<KeyPressHandler />
				<AppContainer>
					<p></p>
				</AppContainer>
			</AppStateProvider>
		</ThemeProvider>
	);
}
