import { Alert, AlertColor, Snackbar } from '@mui/material';
import React from 'react';

type AlertsInterface = {
	open: boolean,
	message: string,
	severity: AlertColor | undefined,
	handleClose: () => void
}

const Alerts: React.FC<AlertsInterface> = ({ open, message, severity, handleClose }) => (
	<Snackbar
		anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
		autoHideDuration={3000}
		open={open}
		onClose={handleClose}
	>
		<Alert
			severity={severity}
			onClose={handleClose}
		>
			{message}
		</Alert>
	</Snackbar>
);

export default Alerts;
