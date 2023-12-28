import { useEffect, useRef, useState } from 'react';
import Meyda from 'meyda';
import { Button } from '@mui/material';

const AudioComponent = () => {
	const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
	const audioElement = useRef<HTMLMediaElement | null>(null);

	useEffect(() => {
		setAudioContext(new AudioContext());
	}, []);

	useEffect(() => {
		if (audioContext !== null && audioElement.current !== null) {
			const source =
				audioElement && audioContext.createMediaElementSource(audioElement.current);
			source && source.connect(audioContext.destination);

			const analyzer = Meyda.createMeydaAnalyzer({
				audioContext: audioContext,
				source: source,
				bufferSize: 512,
				featureExtractors: ['rms'],
				callback: (features: Meyda.MeydaFeaturesObject) => {
					console.log(features);
				},
			});
			analyzer.start();
		}
	}, [audioContext]);

	const startAudio = () => {
		audioContext && audioContext.state === 'suspended' ? audioContext.resume() : null;
	};
	return (
		<>
			<audio
				ref={audioElement}
				controls
				loop
				crossOrigin="anonymous"
				id="audio"
				src="/cowboyBebopSample.wav"
			></audio>
			<Button variant="outlined" onClick={startAudio}>
				Start
			</Button>
		</>
	);
};

export default AudioComponent;
