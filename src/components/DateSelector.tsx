import Tooltip from '@mui/material/Tooltip';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

export const DateSelector = ({
  label,
  value,
  setValue,
  isDisabled,
  tooltip = '',
}: ComponentProps<Dayjs | null>): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Tooltip placement="top" title={tooltip}>
        <span /* Magic span to make tooltips work */>
          <DatePicker
            label={label}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            disabled={isDisabled}
          />
        </span>
      </Tooltip>
    </LocalizationProvider>
  );
};
