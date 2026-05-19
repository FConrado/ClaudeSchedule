# Bank Reschedule Dashboard

A dashboard for viewing bank transactions and rescheduling them.

## Features

- **Transaction List**: Displays all bank transactions in a table format
- **Columns**: ID, Agente, Cliente, Valor, Schedule, ScheduleID
- **Reschedule Button**: Each transaction has a reschedule action button
- **API Configuration**: Set your API endpoint via the "Configure API" button
- **Data Refresh**: Click "Refresh" to reload data from the API
- **Local Storage**: API endpoint is saved in browser for persistent configuration
- **Responsive Design**: Works on desktop and mobile devices

## Expected API Response Format

The API should return a JSON array of transactions:

```json
[
  {
    "bank_Transaction_Nexi": "1776263664274x379516180625793400",
    "agente": "Agent Name",
    "cliente": "Client Name",
    "valor": 1500.50,
    "schedule": "2026-05-20T14:00:00Z",
    "ScheduleID": "5726105"
  },
  ...
]
```

## Usage

1. Open `index.html` in a web browser
2. Click "Configure API" button
3. Enter your API endpoint URL
4. The dashboard will automatically fetch and display transactions
5. Click "Reagendar" (Reschedule) on any transaction to reschedule it

## Reschedule API Integration

The reschedule functionality is ready to be integrated. When you provide the reschedule API endpoint, the following information will be sent:

- `transactionId`: The bank_Transaction_Nexi value
- `scheduleId`: The ScheduleID value
- `newDate`: The new scheduled date/time in format `YYYY-MM-DD HH:MM`

## Customization

You can modify the styling in the `<style>` section and update the table columns by editing the `renderTable()` function if your API response has different field names.
