import { component$, useContext, useSignal, useStore, $ } from '@builder.io/qwik';
import { UIContext } from '~/context/ui/ui-context';
import { InitialStateContactForm } from '~/data/seed';
import InputForm from './input-form';
import emailjs from 'emailjs-com'; // Import the emailjs library

export default component$(() => {

	const formState = useStore(InitialStateContactForm);
	const loading = useSignal(false);

	const { showAlert } = useContext(UIContext);

	const reset = $(() => {
		formState.name = '';
		formState.email = '';
		formState.message = '';
	});

	const onSubmit = $(async () => {
		loading.value = true;

		// Send email using emailjs
		try {
			const response = await emailjs.send('service_5uol84u', 'template_8zi0xo9', {
				username: formState.email,
				message: formState.message,
				user_email: formState.email,
				reply_to: formState.email,
			}, 'E9sBd5qpRQHiwTQvy');

			console.log('Email sent:', response);
			// Handle success, show a success message or perform other actions
		} catch (error) {
			console.error('Error sending email:', error);
			// Handle error, show an error message or perform other actions
		}

		loading.value = false;
		reset();
		showAlert.value = true;
	});

	return (
		<form onSubmit$={onSubmit} preventdefault:submit>
			<InputForm
				required
				onInput={$((e: Event) => {
					formState.name = (e.target as HTMLInputElement).value;
				})}
				name='name'
				type='text'
				value={formState.name}
				placeholder='Name'
			/>

			<InputForm
				required
				onInput={$((e: Event) => {
					formState.email = (e.target as HTMLInputElement).value;
				})}
				name='email'
				type='email'
				value={formState.email}
				placeholder='Email'
			/>
			<InputForm
				isTextArea
				required
				onInput={$((e: Event) => {
					formState.message = (e.target as HTMLTextAreaElement).value;
				})}
				name='message'
				value={formState.message}
				placeholder='Message'
			/>
			<button
				disabled={loading.value}
				type='submit'
				class='w-full font-semibold py-2 rounded-md border bg-gradient-to-r from-blue-500 to bg-cyan-500 text-white hover:shadow-xl dark:bg-blue-600 dark:border-none dark:hover:bg-blue-700 dark:hover:text-white disabled:opacity-50 transition-shadow ease-in-out duration-300'
			>
				{loading.value ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	);
});
